import { injectable, inject } from 'inversify';
import IDictionaryRepository from '../../../UseCase/IRepositories/IDictionaryRepository';
import TYPES from '../../../type';
import Dictionary from '../DataEntities/Dictionary'
import Sequelize from 'sequelize';

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
    return this._dictionary.findAll({ limit: 5, where: { word: { [Sequelize.Op.like]: '%' + keyWord + "%" }}, raw: true})
    .catch((err: Error) => { 
      console.log(err);
      return {};
    });
  }
}


