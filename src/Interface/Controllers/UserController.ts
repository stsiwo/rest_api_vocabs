import * as express from 'express';
import { interfaces, controller, httpGet, httpPost } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../../UseCase/IServices/IUserService';

@controller("/user")
export default class UserController implements interfaces.Controller {

  private _userService: IUserService;

  public constructor(
    @inject(TYPES.IUserService) userService: IUserService
  ) {
    this._userService = userService;
  }

  @httpGet("/")
  private index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const users = this._userService.getUsers();
    res.status(200).json({ message: users });
  }

  @httpPost("/")
  private post(req: express.Request, res: express.Response, next: express.NextFunction): void {
    console.log(req.body);
    res.status(200).json({ message: "success" });
  }
}


