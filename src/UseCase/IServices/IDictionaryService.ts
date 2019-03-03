export default interface IDictionaryService {

  searchWords: ( keyWord: string ) => Promise<object>;
}


