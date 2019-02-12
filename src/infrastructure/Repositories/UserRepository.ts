import User from '../Entities/User';

export default class UserRepository {

  protected user: typeof User;

  constructor() {
    this.user = User;
  }

  public getAll(): void {
    console.log(this.user);
    //return this.user.findAll()
  }
}


