import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import container from './iocContainer';
import { InversifyExpressServer } from 'inversify-express-utils';

// cors config
const corsOptions = {
  origin: 'http://localhost:8080',
  allowedHeaders: [ 'Content-Type' ],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  
}

// declare metadata by @controller annotation
import "./Interface/Controllers/UserController";
import "./Interface/Controllers/OAuthController";


// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
});

const app = server.build();
export default app;

app.listen(3000, () => { console.log("start listening...") });
