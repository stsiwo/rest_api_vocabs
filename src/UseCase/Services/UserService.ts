import { injectable, inject } from "inversify";
import TYPES from '../../type';
import IUserService from '../IServices/IUserService';
import IUserRepository from '../IRepositories/IUserRepository'; 
import IWord from '../../Domain/Word';

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

  public async getWordsOfUser(userName: string): Promise<object> {
    return this._userRepository.getWordsOfUser(userName);
  }

  public async upsertWordsOfUser(userName: string, words: IWord[]): Promise<boolean> {
    return this._userRepository.upsertWordsOfUser(userName, words);
  }

  public async checkUserNameUnique(name: string): Promise<boolean> {
    return this._userRepository.checkUserNameUnique(name);
  }
}



