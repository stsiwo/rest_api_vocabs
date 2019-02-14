import { injectable, inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../services/IUserService';

@injectable()
export default class UserController implements UserController {

  private _userService: IUserService;

  public constructor(
    @inject(TYPES.IUserService) userService: IUserService
  ) {
    this._userService = userService;
  }

  public getUsers(): string {
    return this._userService.getUsers();
  }
}


