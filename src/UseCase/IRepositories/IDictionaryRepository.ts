export default interface IDictionaryRepository {

  searchWords: ( keyWord: string ) => Promise<object>;

}

