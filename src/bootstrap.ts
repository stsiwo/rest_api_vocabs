import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import container from './iocContainer';
import { InversifyExpressServer } from 'inversify-express-utils';
import './env';
const log = require('./customLog')('bootstrap');

// sequelize initialize
import './Framework/Infrastructure/connection';

const clientOrigin: string = (process.env.NODE_ENV as string) === 'production' ? (process.env.CLIENT_VOCABS_URL_PROD as string) : (process.env.CLIENT_VOCABS_URL_DEV as string);
// cors config
const corsOptions = {
  // when credentialed request, you need to specify the origin rather than "*"
  origin: clientOrigin, 
  allowedHeaders: [ 'Content-Type', "Authorization" ],
  //credentials: true, // Access-Control-Allow-Credential: expect cookie to include in request
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

const port: string = (process.env.NODE_ENV as string) === 'production' ? (process.env.VOCABS_API_PORT_PROD as string) : (process.env.VOCABS_API_PORT_DEV as string);

app.listen(port, () => { console.log("start listening...") });
