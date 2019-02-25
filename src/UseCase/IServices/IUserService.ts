export default interface IUserService {
  getUsers: () => string;

  getWordsOfUser: (userName: string) => Promise<object>;
}
