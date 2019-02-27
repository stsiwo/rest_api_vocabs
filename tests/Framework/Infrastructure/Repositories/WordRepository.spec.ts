import WordRepository from '../../../../src/Framework/Infrastructure/Repositories/WordRepository';
import Word from '../../../../src/Framework/Infrastructure/DataEntities/Word';
// initialize database
import '../../../../src/Framework/Infrastructure/connection';
// initial set up tables and test data
import '../../../initialSetup';

/**
 * the problem is that when i intialize setup, uuid always change every time, so how do i get target word id to be deleted
 **/

describe('WordRepository', function() {

  beforeAll(() => {
  });

  const testData = [
    "44b8508b-520b-4fec-ad66-34c8a43f82e5",
  ];

  const wordRepo = new WordRepository();

  it('delete words', async function() {
    const isOk = await wordRepo.deleteWords(testData);
    expect(isOk).toEqual(true);
  });
});


