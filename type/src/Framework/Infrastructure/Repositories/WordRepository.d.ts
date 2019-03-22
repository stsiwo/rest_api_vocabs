import IWordRepository from '../../../UseCase/IRepositories/IWordRepository';
export default class WordRepository implements IWordRepository {
    private _word;
    constructor();
    deleteWords(words: string[]): Promise<boolean>;
}
//# sourceMappingURL=WordRepository.d.ts.map