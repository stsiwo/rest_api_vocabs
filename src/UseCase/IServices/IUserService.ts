import IWord from '../../Domain/Word';

export default interface IUserService {
  getUsers: () => string;

  getWordsOfUser: (userName: string) => Promise<object>;

}
