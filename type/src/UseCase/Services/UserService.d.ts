import IUserService from '../IServices/IUserService';
import IUserRepository from '../IRepositories/IUserRepository';
import ICloudinaryAPI from '../IAPIs/ICloudinaryAPI';
import IWord from '../../Domain/Word';
export default class UserService implements IUserService {
    private _userRepository;
    private _cloudinaryApi;
    constructor(userRepository: IUserRepository, cloudinaryApi: ICloudinaryAPI);
    getUsers(): string;
    getWordsOfUser(userName: string): Promise<object>;
    upsertWordsOfUser(userName: string, words: IWord[]): Promise<boolean>;
    deleteImagesOfUser(userName: string, urls: string[]): Promise<boolean>;
    checkUserNameUnique(name: string): Promise<boolean>;
    checkEmailAlreadyExist(email: string): Promise<boolean>;
    signUp(name: string, email: string, password: string): Promise<boolean>;
}
//# sourceMappingURL=UserService.d.ts.map