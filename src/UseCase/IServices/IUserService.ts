import IWord from '../../Domain/Word';

export default interface IUserService {
  getUsers: () => string;

  getWordsOfUser: (userName: string) => Promise<object>;

  upsertWordsOfUser: (userName: string, words: IWord[]) => Promise<boolean>;

}
