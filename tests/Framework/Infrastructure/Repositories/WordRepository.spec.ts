import WordRepository from '../../../../src/Framework/Infrastructure/Repositories/WordRepository';
import Word from '../../../../src/Framework/Infrastructure/DataEntities/Word';
// initialize database
import '../../../../src/Framework/Infrastructure/connection';

describe('WordRepository', function() {

  const wordRepo = new WordRepository();

  //it('get all Words', async function() {
    //const words = await wordRepo.bulkUpsert(testData);
    //expect(words).toEqual(true);
  //});
});


