import IWord from '../../Domain/Word';

export default interface IUserService {
  getUsers: () => string;

  getWordsOfUser: (userName: string) => Promise<object>;

  upsertWordsOfUser: (userName: string, words: IWord[]) => Promise<boolean>;

  checkUserNameUnique: (name: string) => Promise<boolean>;

  checkEmailAlreadyExist: (email: string) => Promise<boolean>;

  signUp: (name: string, email: string, password: string) => Promise<boolean>;
}
