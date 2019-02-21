import { injectable } from 'inversify';
import IUserRepository from '../../../UseCase/IRepositories/IUserRepository';

@injectable()
export default class UserRepository implements IUserRepository {

  public getAll(): string {
    return "user list is here";
  }
}
//import User from '../Entities/User';

//export default class UserRepository {

  //protected user: typeof User;

  //constructor() {
    //this.user = User;
  //}

  //public async getAll(): Promise<User[]> {
    //return await this.user.findAll()
  //}

//}


