import IWord from '../../Domain/Word';

export default interface IWordService {

  deleteWords: ( words: string[] ) => Promise<boolean>;
}

