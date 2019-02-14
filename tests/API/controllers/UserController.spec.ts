import app from '../../../src/bootstrap'; 
import request from 'supertest';
import { Response } from 'superagent';

describe('UserController', function() {

  describe('index', function() {

    it('get all Users', async function() {
      request(app)
        .get('/users')
        .expect(200, { message: "user list is here" })
    });
  });

  afterAll(async done => {
    done();
  });
});


