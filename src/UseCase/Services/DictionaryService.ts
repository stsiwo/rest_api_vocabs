import { injectable, inject } from "inversify";
import "reflect-metadata";
import TYPES from '../../type';
import IDictionaryService from '../IServices/IDictionaryService';
import IDictionaryRepository from '../IRepositories/IDictionaryRepository'; 

@injectable()
export default class DictionaryService implements IDictionaryService {

  private _dictionaryRepository: IDictionaryRepository;

  public constructor(
    @inject(TYPES.IDictionaryRepository) dictionaryRepository: IDictionaryRepository
  ) {
    this._dictionaryRepository = dictionaryRepository;
  }

  public async searchWords( keyWord: string ): Promise<object> {
    return this._dictionaryRepository.searchWords(keyWord);
  }
}





