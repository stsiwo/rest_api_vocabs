import { injectable, inject } from 'inversify';
import "reflect-metadata";
import IDictionaryRepository from '../../../UseCase/IRepositories/IDictionaryRepository';
import TYPES from '../../../type';
import Dictionary from '../DataEntities/Dictionary'
//import Sequelize from 'sequelize';
import sequelize from '../connection';

@injectable()
export default class DictionaryRepository implements IDictionaryRepository {

  private _dictionary: typeof Dictionary; 

  public constructor() {
    this._dictionary = Dictionary;
  }

  public async searchWords( keyWord: string ): Promise<object> {
    /**
     * can't use $like: %key%
     * I don't know why
     **/
    //return this._dictionary.findAll({ limit: 5, where: { word: { [Sequelize.Op.like]: '%' + keyWord + "%" }}, raw: true})
    return sequelize.query(`SELECT * FROM "Dictionary" WHERE levenshtein(word, '${ keyWord }') <= 3 ORDER BY levenshtein(word, '${ keyWord }') LIMIT 5`, { type: sequelize.QueryTypes.SELECT}) 
    .catch((err: Error) => { 
      console.log(err);
      return {};
    });
  }
}


