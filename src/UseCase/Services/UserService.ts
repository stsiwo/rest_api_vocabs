import { injectable, inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../IServices/IUserService';
import IUserRepository from '../IRepositories/IUserRepository'; 

@injectable()
export default class UserService implements IUserService {

  private _userRepository: IUserRepository;

  public constructor(
    @inject(TYPES.IUserRepository) userRepository: IUserRepository
  ) {
    this._userRepository = userRepository;
  }

  public getUsers(): string {
    return this._userRepository.getAll();
  }
}



