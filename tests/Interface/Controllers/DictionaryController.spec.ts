import app from '../../../src/bootstrap'; 
import request from 'supertest';
import * as qs from 'query-string';

describe('DictionaryController', function() {

  describe('GET /dictionary?keyWord="..."', function() {

    it('saerch words', async function() {
      
      const sampleKeyWord = "apple";

      await request(app)
        .get(`/dictionary?keyWord=${ sampleKeyWord }`)
        .expect(200, { isOk: {} })
    });
  });
});




