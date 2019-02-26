import { injectable, inject } from 'inversify';
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

  /**
   * bulk upsert words entry 
   *  - sequelize currently does not have "bulkUpsert" function, so implemented of my own
   *  - should I use transaction?
   *  - upsert and update function can't have "include" option to upsert/update association at once!!! so don't use together
   *
   *  #REFACTOR
   **/
  public async bulkUpsert( words: IWord[] ): Promise<boolean> {
    // transaction starts
    return sequelize.transaction(( t ) => {
      // delete target words first
      return this._word.destroy({
        where: { id: words.map(( word ) => word.id) }
      })
        .then(() => {
          // create words with the association (Def) 
          return Promise.all( words.map(( word ) => {
            return this._word.create(word, {
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
}

