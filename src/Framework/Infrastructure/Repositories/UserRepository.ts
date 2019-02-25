import { injectable, inject } from 'inversify';
import IUserRepository from '../../../UseCase/IRepositories/IUserRepository';
import TYPES from '../../../type';
import User from '../DataEntities/User'
import Def from '../DataEntities/Def';
import Word from '../DataEntities/Word';

@injectable()
export default class UserRepository implements IUserRepository {

  private _user: typeof User; 

  public constructor() {
    this._user = User;
  }
  //public constructor(
    //@inject(TYPES.IUserModel) user: IUserModel 
  //) {
    //this._user = user;
  //}

  public getAll(): string {
    return "user list is here";
  }

  public async getWordsOfUser(userName: string): Promise<object> {
    // "then" function make codes disgusting, better to use await and async 
    // get user contains its association (words)
    const user = await this._user.findOne({ 
      where: { name: userName }, 
      include: [
        { 
          model: Word, 
          attributes: [ 'id', 'name', [ 'creationDate', 'createdAt' ]],
          include: [
            { 
              model: Def,
              attributes: [ 'id', 'def', 'image', [ 'wordId', '_wordId' ], [ 'posId', 'pos' ]],
            } 
          ] 
        } 
      ],
    })

    // return only words
    return user.words;
  }
}
