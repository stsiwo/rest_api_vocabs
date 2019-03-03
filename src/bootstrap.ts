import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import container from './iocContainer';
import { InversifyExpressServer } from 'inversify-express-utils';

// sequelize initialize
import './Framework/Infrastructure/connection';

// cors config
const corsOptions = {
  // when credentialed request, you need to specify the origin rather than "*"
  origin: 'http://localhost:8080',
  allowedHeaders: [ 'Content-Type', "Authorization" ],
  // this one is for client's credential is "include"
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  
}

// declare metadata by @controller annotation
import "./Interface/Controllers/UserController";
import "./Interface/Controllers/OAuthController";
import "./Interface/Controllers/WordController";
import "./Interface/Controllers/DictionaryController";

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  //  - means you don't need to parse json string to object using JSON.parse
  //  parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
});

const app = server.build();
export default app;

app.listen(3000, () => { console.log("start listening...") });
