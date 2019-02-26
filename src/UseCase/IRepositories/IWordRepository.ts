import IWord from '../../Domain/Word';
/**
 * IRepository should be inside application layer ( or use case layer )
 *   - this is because Infrastructure layer is the most outer layer
 *   - so application layer can't have dependency of outer layer
 *   - to solve this issue, how application layer can have respository dependency is to use dependency inversion
 *   - by creating IRespository inside application layer, it can overcome this issue
 *     - application layer can have repository dependency because now IRepository is inside application layer (same layer dependency is ok)
 *     - infrastructure repository implmentation has IRepository dependency of application layer (outer layer can has dependency in inner layer)
 **/
export default interface IWordRepository {

  bulkUpsert: ( words: IWord[] ) => Promise<boolean>;

}

