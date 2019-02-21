import * as express from 'express';
import { interfaces, controller, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import oauth from '../Services/oauthUtil';

@controller("/oauth")
export default class OAuthController implements interfaces.Controller {

  /**
   * issue new access token to post request
   *
   *   - do not implement inside this function since middleware (oauth.token()) returns new token to client
   **/
  @httpPost("/token", oauth.token())
  private index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // don't need to implement this function
  }
}



