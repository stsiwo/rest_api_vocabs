import CloudinaryAPI from '../../../src/Framework/APIs/CloudinaryAPI';

describe('CloudinaryAPI', function() {

  const cloudinaryApi = new CloudinaryAPI();

  it('search words', async function() {
    const testUser = "test";
    const testUrl = "iyj8yojvfpcy5rwmf3sl";
    const isOk = await cloudinaryApi.deleteImagesOfUser(testUser, [ testUrl ]);
    expect(isOk).toEqual(true);
  });
});


