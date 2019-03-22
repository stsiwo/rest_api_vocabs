import IWordService from '../IServices/IWordService';
import IWordRepository from '../IRepositories/IWordRepository';
export default class WordService implements IWordService {
    private _wordRepository;
    constructor(wordRepository: IWordRepository);
    deleteWords(words: string[]): Promise<boolean>;
}
//# sourceMappingURL=WordService.d.ts.map