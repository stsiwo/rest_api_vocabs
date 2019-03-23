import { injectable, inject } from "inversify";
import "reflect-metadata";
import TYPES from '../../type';
import IUserService from '../IServices/IUserService';
import IUserRepository from '../IRepositories/IUserRepository'; 
import ICloudinaryAPI from '../IAPIs/ICloudinaryAPI'; 
import IWord from '../../Domain/Word';


@injectable()
export default class UserService implements IUserService {

  private _userRepository: IUserRepository;

  private _cloudinaryApi: ICloudinaryAPI;

  public constructor(
    @inject(TYPES.IUserRepository) userRepository: IUserRepository,
    @inject(TYPES.ICloudinaryAPI) cloudinaryApi: ICloudinaryAPI
  ) {
    this._userRepository = userRepository;
    this._cloudinaryApi = cloudinaryApi;
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

  public async deleteImagesOfUser(userName: string, urls: string[]): Promise<boolean> {
    return this._cloudinaryApi.deleteImagesOfUser(userName, urls);
  }

  public async checkUserNameUnique(name: string): Promise<boolean> {
    return this._userRepository.checkUserNameUnique(name);
  }

  public async checkEmailAlreadyExist(email: string): Promise<boolean> {
    return this._userRepository.checkEmailAlreadyExist(email);
  }

  public async signUp(name: string, email: string, password: string): Promise<boolean> {
    return this._userRepository.signUp(name, email, password);
  }
}



