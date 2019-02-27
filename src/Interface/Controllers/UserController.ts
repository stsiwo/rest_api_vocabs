import * as express from 'express';
import { interfaces, controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../../UseCase/IServices/IUserService';
import oauth from '../Services/oauthUtil';

@controller("/user")
export default class UserController implements interfaces.Controller {

  private _userService: IUserService;

  public constructor(
    @inject(TYPES.IUserService) userService: IUserService
  ) {
    this._userService = userService;
  }

  @httpGet("/:username/word", oauth.authenticate())
  private async get(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const words = await this._userService.getWordsOfUser(req.params.username);
    res.status(200).json({ words: words });
  }

  @httpPost("/:username/word", oauth.authenticate())
  private async post(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
    const isOk = await this._userService.upsertWordsOfUser(req.params.username, req.body);
    isOk ? res.status(200).json({ message: "upsert is completed" }) : res.status(409).json({ message: "upsert is NOT completed" });
  }

  //@httpPost("/")
  //private post(req: express.Request, res: express.Response, next: express.NextFunction): void {
    //console.log(req.body);
    //res.set('Set-Cookie', 'testCookie=testCookieValue');
    //res.status(200).json({ message: "success" });
  //}
}


