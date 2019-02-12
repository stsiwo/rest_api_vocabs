import User from '../Entities/User';

export default class UserRepository {

  protected user: typeof User;

  constructor() {
    this.user = User;
  }

  public async getAll(): Promise<User[]> {
    return await this.user.findAll()
  }

}


