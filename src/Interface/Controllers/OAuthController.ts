import * as express from 'express';
import "reflect-metadata";
import { interfaces, controller, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import oauth from '../Services/oauthUtil';
import AccessToken from '../../Framework/Infrastructure/DataEntities/AccessToken';

@controller("/oauth")
export default class OAuthController implements interfaces.Controller {

  /**
   * issue new access token to post request
   *
   *   - do not implement inside this function since middleware (oauth.token()) returns new token to client
   **/
  @httpPost("/token", oauth.token())
  private index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // if i can modify oauth.token() method, the best solution to set access token in cookie is to set it here in server side with httpOnly flag so client side never touch access token cookie which increase security
    // however, i don't know how to modify the oauth.token() function so install cookie libaray in react and set access token sent from here then save it in cookie with httpOnly flag (this is the second option)
    // since there is no way to access cookie with flag of 'httpOnly', have to use session or local storage ( this is the third option )
    // don't need to implement this function
  }

  /**
   * revoke token  
   *   - delete the row to invalidate access tokena and refresh token 
   **/
  @httpPost("/revoke")
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    // find refresh token and delete the row
    const deletedRow = await AccessToken.destroy({ where: { refreshToken: req.body.refreshToken }})
    deletedRow ? res.status(200).json({ message: "completed" }) : res.status(409).json({ message: "not completed" });
  }
}



