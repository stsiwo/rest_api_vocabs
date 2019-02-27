import app from '../../../src/bootstrap'; 
import request from 'supertest';
import * as qs from 'query-string';

describe('WordController', function() {

  describe('DELETE /word', function() {

    it('delete words', async function() {
      
      const testData = {
        id: [
          "4d5aeb1c-7762-4728-bec9-c7a6987277fc",
        ]
      }

      await request(app)
        .delete('/word')
        .type('form')
        .send(qs.stringify(testData, { arrayFormat: 'index' }))
        .set('Accept', 'application/x-www-form-urlencoded')
        .expect(200, { isOk: true })
    });
  });
});



