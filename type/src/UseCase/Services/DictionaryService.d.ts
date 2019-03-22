import IDictionaryService from '../IServices/IDictionaryService';
import IDictionaryRepository from '../IRepositories/IDictionaryRepository';
export default class DictionaryService implements IDictionaryService {
    private _dictionaryRepository;
    constructor(dictionaryRepository: IDictionaryRepository);
    searchWords(keyWord: string): Promise<object>;
}
//# sourceMappingURL=DictionaryService.d.ts.map