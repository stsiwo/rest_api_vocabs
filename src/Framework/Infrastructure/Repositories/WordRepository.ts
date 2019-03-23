import { injectable, inject } from 'inversify';
import "reflect-metadata";
import IWordRepository from '../../../UseCase/IRepositories/IWordRepository';
import TYPES from '../../../type';
import Word from '../DataEntities/Word'
import Def from '../DataEntities/Def'
import IWord from '../../../Domain/Word';
import sequelize from '../connection';

@injectable()
export default class WordRepository implements IWordRepository {

  private _word: typeof Word; 

  public constructor() {
    this._word = Word;
  }

  public async deleteWords( words: string[] ): Promise<boolean> {
    return this._word.destroy({ where: { id: words }})
    .then(() => true)
    .catch((err) => { 
      console.log(err);
      return false
    });
  }
}

