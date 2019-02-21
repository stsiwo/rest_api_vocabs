import * as express from 'express';
import { interfaces, controller, httpGet } from "inversify-express-utils";
import { inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../../UseCase/IServices/IUserService';

@controller("/users")
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
  //public getUsers(): string {
    //return this._userService.getUsers();
  //}
}


