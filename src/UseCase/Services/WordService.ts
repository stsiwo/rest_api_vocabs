import { injectable, inject } from "inversify";
import TYPES from '../../type';
import IWordService from '../IServices/IWordService';
import IWordRepository from '../IRepositories/IWordRepository'; 
import IWord from '../../Domain/Word';

@injectable()
export default class WordService implements IWordService {

  private _wordRepository: IWordRepository;

  public constructor(
    @inject(TYPES.IWordRepository) wordRepository: IWordRepository
  ) {
    this._wordRepository = wordRepository;
  }

  public async bulkUpsert( words: IWord[] ): Promise<boolean> {
    return this._wordRepository.bulkUpsert(words);
  }
}




