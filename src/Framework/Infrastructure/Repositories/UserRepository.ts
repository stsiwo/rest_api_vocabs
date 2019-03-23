import { injectable, inject } from 'inversify';
import "reflect-metadata";
import IUserRepository from '../../../UseCase/IRepositories/IUserRepository';
import sequelize from '../connection';
import TYPES from '../../../type';
import User from '../DataEntities/User'
import Def from '../DataEntities/Def';
import Word from '../DataEntities/Word';
import IWord from '../../../Domain/Word';

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
          attributes: [ 'id', 'name', 'creationDate' ],
          include: [
            { 
              model: Def,
              attributes: [ 'id', 'def', 'image', 'wordId', 'posId' ],
            } 
          ] 
        } 
      ],
    })

    // return only words
    return user.words;
  }

  /**
   * bulk upsert words entry 
   *  - sequelize currently does not have "bulkUpsert" function, so implemented of my own
   *  - upsert and update function can't have "include" option to upsert/update association at once!!! so don't use together
   *
   **/
  public async upsertWordsOfUser(userName: string, words: IWord[]): Promise<boolean> {
    // transaction starts
    return sequelize.transaction(( t ) => {
      // find user
      return this._user.findOne({ where: { name: userName }})
        // assign user id to each word object
        .then(( user ) => { 
          words.forEach(( word ) => word.userId = user.id);
        })
        // delete target words first
        .then(() => { 
          Word.destroy({
            where: { id: words.map(( word ) => word.id) }
          })
        })
        // create words with the association (Def) 
        .then(() => {
          return Promise.all( words.map(( word ) => {
            return Word.create(word, {
              include: [ Def ]
            })
          })) 
        })
        // if success, sequelize automatically commit the transaction
        .then(() => true)
        // if fail, sequelize automatically rollback the transaction
        .catch((err) => { console.log(err); return false });
    }); 
  }

  public async checkUserNameUnique(name: string): Promise<boolean> {
    return this._user.findOne({ where: { name: name }})
      .then(( user ) => user === null)
  }

  public async checkEmailAlreadyExist(email: string): Promise<boolean> {
    return this._user.findOne({ where: { email: email }})
      .then(( user ) => user !== null)
  }

  public async signUp(name: string, email: string, password: string): Promise<boolean> {
    return this._user.create({ name: name, email: email, password: password })
      .then(() => true).catch(() => false);
  }
}
