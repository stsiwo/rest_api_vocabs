import express from 'express';
import * as bodyParser from 'body-parser';
import { User, OauthAccessTokens, IUser } from './oauthDBConnection';

// server setup
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// post request for access token
// - register new user (not exisitng user): sign up
app.post('/signup' /*,register user middleware*/, function(req: express.Request, res: express.Response) {

  const username = req.body.username;
  const password = req.body.password;
  
  // need to validate those besides front-end validation
  // always double validation (front and back-end)
  // for now, skip it;)

  // check those already exists or not
  // if exist cancel this process
  // for now, skip it;)

  console.log(username);
  // save user
  User.create({ name: username, password: password }).then(( user ) => {
    res.status(200).json({ user: user.name });
  }); 
  
})

app.post('/login' /*,register user middleware*/,async function(req: express.Request, res: express.Response) {
  console.log("receive post request");

  res.status(200).json({ username: req.body.username });
})

//const OAuth2Server = require('oauth2-server');
//const Request = OAuth2Server.Request;
//const Response = OAuth2Server.Response;

//const model = {
  
  //// optional 
  //// generate access token 
  //// default implementation is ok for now so don't implement this
  ////generateAccessToken: function(client, user, scope, [callback]) {
  ////}

  //// require if authenticate() is used
  //// retrieve an existing access token previously saved through saveToken()
  //getAccessToken: function(accessToken: string) {
  //},

  //// require for all grant type including password
  //// get a client by client id and its secret 
  //// maybe this does not need this in this case (password) so
  //// don't need to implement this
  //getClient: function(clientId: string, clientSecret: string) {
    //return null; 
  //},

  //// require for password grant type
  //// get user by username, password 
  //getUser: function(username: string, password: string) {
    //// access database to get user
  //},

  //// require for all grant type including password
//// save token (access token, expiration, and its associating user)
  //saveToken: function(token: string, client: object, user: IUser) {

  //}
//};

/**
 * Resource Owning Password Credentials grant type (a.k.a Password grant type)
 *  - 1. get POST request containing type, password, username, (client_id=null, client_secret=null)
 *  - 1.1 this request two use cases
 *      -a) sign up request (new user)
 *      -b) login request (existing user)
 *    a) 2. create new access token
 *    a) 3. save the new access token and user info in db
 *    a) 4. return the new access token, expires, refresh_token, scope called those info as "token"
 *    
 *    b) 2. check user exists in database
 *    b)   2.1. if exists, return token
 *    b)   2.2. if does not exists, return error
 *
 **/

//const oauth = new OAuth2Server({
  //model: model, 
//});

//// represents an incoming HTTP request
//let request = new Request({
  //method: 'POST',
//});

//// represents an outgoing HTTP response
//let response = new Response({
  //headers: {
    //"Content-Type": "application/json",
    //"Cache-Control": "no-store",
    //"Pragma": "no-cache"
  //}
//});

//// use for b) login use case
//oauth.authenticate(request, response)
  //.then((token: string) => {
    //// The request was successfully authenticated.
  //})
  //.catch((err: Error) => {
    //// The request failed authentication.
  //});

//console.log("just before listen");
app.listen(3000, () => { console.log("litening"); });
