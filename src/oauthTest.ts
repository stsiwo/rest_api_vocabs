import express from 'express';
//import OAuth2Server from 'oauth2-server';
import OAuth2Server from 'express-oauth-server';
import { Token } from 'oauth2-server';
import * as bodyParser from 'body-parser';
import { User, OauthAccessTokens, IOauthAccessTokens } from './oauthDBConnection';


interface IUser {
  id?: string;
  name: string;
  password: string;
  grants?: string[];
}

const user: IUser = {
  id: "11111",
  name: "sample_name",
  password: "sample_pw",
  grants: [ 'password' ],
};

interface IClient {
  id: string;
  clientId: string;
  clientSecret: string;
  grants: string[];
}

const client: IClient = {
  id: "22222",
  clientId: "sample_cid",
  clientSecret: "sample_cs",
  grants: [ 'password' ],
};

interface IToken {
  accessToken: string;
  accessTokenExpiresAt: Date | undefined;
  refreshToken: string; 
  scope: string | undefined;
  client: IClient;
  user: IUser;
}

//const token: IToken = {
  //accessToken: "sample_aToken",
  //accessTokenExpiresAt: undefined,
  //refreshToken: 
  //client: client,
  //user: user
//};

const model = {
  
  // optional 
  // generate access token 
  // default implementation is ok for now so don't implement this
  //generateAccessToken: function(client, user, scope, [callback]) {
  //}

  // require if authenticate() is used
  // retrieve an existing access token previously saved through saveToken()
  getAccessToken: async function(accessToken: string): Promise<Token | null> {

    const accessTokenObject = await OauthAccessTokens.findOne({ where: { access_token: accessToken }, raw: true });

    const user = await User.findOne({ where: { id: accessTokenObject.user_id }, raw: true });

    return {
      accessToken: accessTokenObject.access_token,
      accessTokenExpiresAt: accessTokenObject.access_token_expire,
      refreshToken: accessTokenObject.refresh_token,
      client: {
        id: client.id,
        grants: client.grants 
      },
      user: user
    };
  },

  // require for all grant type including password
  // get a client by client id and its secret 
  getClient: async function(clientId: string, clientSecret: string): Promise<IClient> {
    return client
  },

  // require for password grant type
  // get user by username, password 
  /**
   * get user from db to compare with one from request
   *
   * @param { string } username - username from request
   * @param { string } password - from request
   *
   * @return { Promise<IUser> } return user from database if exists otherwise error 
   *  - return error means credentials from requst does not match one in database
   **/
  getUser: async function(username: string, password: string): Promise<IUser | null> {
    
    const user = await User.findOne({ where: { name: username, password: password }, raw: true});

    return user;
  },

  // require for all grant type including password
// save token (access token, expiration, and its associating user)
  /**
   * save newly created access token to db
   *
   * @param { IToken } token - newly created token from this api. it need to be saved in access_tokens table
   * @param { IClient } client - associated client from database. need this because access token table has the relationship
   * @param { IUser } user - associate user from database. need this because access token table has the relationship
   * @return { Promise<IToken> } object contains token, client and user
   **/
  saveToken: async function(token: IToken, client: IClient, user: IUser): Promise<IToken> {
    console.log("saveToken is called");
    /**
     *  - save access token in db for user who made request
     *    and return the access token in return statement 
     *    this is used for token() to return access token as response
     *
     *    NOTE: currently don't use client in this implementation since it is only the client used for api
     *    NOTE: also don't implement refreshTokenExpiresAt since it is optional ( see more detail: https://www.oauth.com/oauth2-servers/making-authenticated-requests/refreshing-an-access-token/ )
     **/
    const newAccessToken = await OauthAccessTokens.create({ 
      access_token: token.accessToken,
      access_token_expire: token.accessTokenExpiresAt,
      refresh_token: token.refreshToken,
      scope: token.scope,
      user_id: user.id
    })

    // and return combination of token, client, and user for response
    return { 
      ...token,
      client,
      user,
    }
  },

  verifyScope: async function(token: IToken, scope: string): Promise<boolean> {
    // currently don't use scope at all so always return true to pass this verify function
    return true;
  }
};

const oauth = new OAuth2Server({
  model: model 
});

// =================== custom ======================

//let request = new OAuth2Server.Request({
  //method: "POST",
  //query: {},
  //headers: {
    //'content-type': 'application/x-www-form-urlencoded',
  //},
  //body: {
    //client_id: null,
  //}
//});

//console.log(request);
//let response = new OAuth2Server.Response({});

//console.log(oauth.token(request, response));

// ======================== server ====================
//declare namespace e {
  //interface Express {
    //oauth: typeof OAuth2Server; 
  //}
//}
// server setup
const app = express();

//app.oauth = oauth;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.post('/test', oauth.token({
  // disable client_secret sent from request
  requireClientAuthentication: {password: false}
})); 

app.get('/authenticate', oauth.authenticate(), function(req: express.Request, res: express.Response) {
  console.log("receive post request");

  res.status(200).json({ username: "success!" });
});

app.listen(3011, () => { console.log("listening ..."); })
