import OAuth2Server from 'express-oauth-server';
import { User, Client, Token, RefreshToken } from 'oauth2-server';
// need to have dependency of IRepo instead of DataEntities. this violate "dependency rules"
// #REFACTOR tag
import EAccessToken from '../../Framework/Infrastructure/DataEntities/AccessToken'; 
import EUser from '../../Framework/Infrastructure/DataEntities/User'; 
const log = require('../../customLog')(__filename);

/**
 * NOTE: OAuth protocol recommends to separate Authroization server and Resource server, but I don't know how to implement this using express-oauth-server because of "oauthenticate()". it resides in Authorization Server ( not Resource Server ); therefore, there is no way to authenticate request in Resource Server.
 *  - if you use jwt, that could be authenticated in Resource server, but currently i use simple token (random string) *  - for now, i implement Authorization Server and Resource Server at a same server
 **/

const TempClient: Client = {
  id: "temp_client_id",
  clientId: "sample_cid",
  clientSecret: "sample_cs",
  grants: [ 'password', 'refresh_token' ]
}



const model = {

  /**
   * get refresh token in db when 'refresh_token' grant type
   *
   * @param { string } refreshToken - a token from request
   *
   * @return { Promise<RefreshToken | null> } refresh token object 
   **/
  getRefreshToken: async function(refreshToken: string): Promise<RefreshToken | null> {

    const refreshTokenObject = await EAccessToken.findOne({ where: { refreshToken: refreshToken }, raw: true });

    if ( refreshTokenObject === null ) {
      throw new Error("there is no such a refresh token");
    }

    const user = await EUser.findOne({ where: { id: refreshTokenObject.userId }, raw: true });

    if ( user === null ) {
      throw new Error("there is no such user for the corresponding refresh token");
    }

    return {
      refreshToken: refreshTokenObject.refreshToken,
      client: {
        id: TempClient.id,
        grants: TempClient.grants 
      },
      user: user
    };
  },
  
  // optional 
  // generate access token 
  // default implementation is ok for now so don't implement this
  //generateAccessToken: function(client, user, scope, [callback]) {
  //}

  /**
   * get access token from database
   *
   * @param { string } accessToken - this from request
   * 
   * @return { Promise<Token | null> } accessToken object - queried by database if exists otherwise null
   *
   * - require if authenticate() is used
   * - retrieve an existing access token previously saved through saveToken() 
   * 
   **/
  getAccessToken: async function(accessToken: string): Promise<Token | null> {
    log.debug("start getAccessToken function");

    const accessTokenObject = await EAccessToken.findOne({ where: { accessToken: accessToken }, raw: true });

    if ( accessTokenObject === null ) {
      throw new Error("there is no such access token to be gotten");
    }

    const user = await EUser.findOne({ where: { id: accessTokenObject.userId }, raw: true });

    if ( user === null ) {
      throw new Error("there is no such user for the corrsponding access token");
    }

    return {
      accessToken: accessTokenObject.accessToken,
      accessTokenExpiresAt: accessTokenObject.accessTokenExpiresAt,
      refreshToken: accessTokenObject.refreshToken,
      client: {
        id: TempClient.id,
        grants: TempClient.grants 
      },
      user: user
    };
  },

  /**
   *  get client from database
   *
   *  @param { string } clientId - from request
   *  @param { string } clientSecret - from request
   *
   *  @return { Promise<Client> } client
   *
   *  - NOTE: for current implementation, i don't implement this function because client that uses this api is the only one
   *  - require for all grant type including password 
   *  - get a client by client id and its secret 
   **/
  getClient: async function(clientId: string, clientSecret: string): Promise<Client> {
    return TempClient
  },

  /**
   * get user from db to compare with one from request
   *
   *  - require for password grant type
   *  - get user by username, password 
   *
   * @param { string } username - username from request
   * @param { string } password - from request
   *
   * @return { Promise<User> } return user from database if exists otherwise error 
   *  - return error means credentials from requst does not match one in database
   **/
  getUser: async function(username: string, password: string): Promise<User | null> {
    log.debug("getUser function start");
    
    const user = await EUser.findOne({ where: { name: username, password: password }, raw: true});

    if ( user === null ) {
      log.debug("empty user");
      throw new Error("there is no such user to be retrieved");
    }

    log.debug("get user");
    log.debug(user);
    return user;
  },

  /**
   * save newly created access token to db
   *
   * @param { IToken } token - newly created token from this api. it need to be saved in accessTokens table
   * @param { Client } client - associated client from database. need this because access token table has the relationship
   * @param { User } user - associate user from database. need this because access token table has the relationship
   * @return { Promise<IToken> } object contains token, client and user
   *
   *  - require for all grant type including password
   *  - save token (access token, expiration, and its associating user)
   **/
  saveToken: async function(token: Token, client: Client, user: User): Promise<Token> {
    /**
     *  - save access token in db for user who made request
     *    and return the access token in return statement 
     *    this is used for token() to return access token as response
     *
     *    NOTE: currently don't use client in this implementation since it is only the client used for api
     *    NOTE: also don't implement refreshTokenExpiresAt since it is optional ( see more detail: https://www.oauth.com/oauth2-servers/making-authenticated-requests/refreshing-an-access-token/ )
     **/
    const newAccessToken = await EAccessToken.create({ 
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      refreshToken: token.refreshToken,
      scope: token.scope,
      userId: user.id
    })

    // and return combination of token, client, and user for response
    return { 
      ...token,
      client,
      user,
    }
  },

  /**
   *  verify scope
   *
   *  @param { Token } token - token object
   *  @param { string } scope - scope
   *
   *  @return { Promise<boolean> } verified or not
   *
   *  - NOTE: currently don't use scope at all so always return true to pass this verify function
   *
   **/
  verifyScope: async function(token: Token, scope: string): Promise<boolean> {
    return true;
  },

  /**
   * revoke refresh token when no longer necessary
   *  - means delete refresh token data from access token table
   *
   * @param { RefreshToken } refresh token - the token from getRefreshToken
   *
   * @return { Promise<boolean> } revocation success or not
   **/
  revokeToken: async function(refreshTokenObject: RefreshToken): Promise<boolean> {

    // find access token row where refresh token matches arg
    const targetAccessToken = await EAccessToken.findOne({ where: { refreshToken: refreshTokenObject.refreshToken }})

    if ( targetAccessToken === null ) {
      throw new Error("there is no such a refresh token to be revoked");
    }

    // update the refresh token column to null
    const isDeleted = await targetAccessToken.update({ refreshToken: null })
    .then((  ) => {
      // return true if success
      return true;
    })
    .catch((  ) => {
      // return false if err
      return false; 
    });

    return isDeleted;
  }
};

// create oauth server
const oauth = new OAuth2Server({
  model: model,
  accessTokenLifetime: 4 * 60 * 60,
  // disable clientSecret in request
  requireClientAuthentication: {password: false}
});

export default oauth;
