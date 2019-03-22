import IUserRepository from '../../../UseCase/IRepositories/IUserRepository';
import IWord from '../../../Domain/Word';
export default class UserRepository implements IUserRepository {
    private _user;
    constructor();
    getAll(): string;
    getWordsOfUser(userName: string): Promise<object>;
    /**
     * bulk upsert words entry
     *  - sequelize currently does not have "bulkUpsert" function, so implemented of my own
     *  - upsert and update function can't have "include" option to upsert/update association at once!!! so don't use together
     *
     **/
    upsertWordsOfUser(userName: string, words: IWord[]): Promise<boolean>;
    checkUserNameUnique(name: string): Promise<boolean>;
    checkEmailAlreadyExist(email: string): Promise<boolean>;
    signUp(name: string, email: string, password: string): Promise<boolean>;
}
//# sourceMappingURL=UserRepository.d.ts.map