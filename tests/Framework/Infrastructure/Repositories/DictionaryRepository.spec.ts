import DictionaryRepository from '../../../../src/Framework/Infrastructure/Repositories/DictionaryRepository';

// initial database connection
import '../../../../src/Framework/Infrastructure/connection';

describe('DictionaryRepository', function() {

  const dictionaryRepo = new DictionaryRepository();

  it('search words', async function() {
    const isOk = await dictionaryRepo.searchWords("Prove");
    console.log(isOk);
    expect(isOk).toEqual({});
  });
});


