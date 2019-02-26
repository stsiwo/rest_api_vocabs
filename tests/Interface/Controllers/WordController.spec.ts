import app from '../../../src/bootstrap'; 
import request from 'supertest';

describe('WordController', function() {

  describe('POST /word', function() {

    it('test', async function() {
      
      const testData = [
        { 
          id: "3745b9a3-ad43-4658-aa89-1a567b14a908",
          name: "update_word1"
        },
        { 
          id: "new-word-id",
          name: "new_word6"
        },
      ];
    
      await request(app)
        .post('/word')
        .type('form')
        .send(testData)
        .set('Accept', 'application/json')
        .expect(200, { message: true })
    });
  });
});



