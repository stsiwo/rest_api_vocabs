import * as express from 'express';
import * as bodyParser from 'body-parser';
import container from './iocContainer';
import { InversifyExpressServer } from 'inversify-express-utils';

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
});

const app = server.build();
export default app;

app.listen(3000, () => { console.log("start listening...") });
