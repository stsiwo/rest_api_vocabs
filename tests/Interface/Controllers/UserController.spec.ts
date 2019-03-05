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

  describe('GET /user/name?name=xxx', function() {

    it('check user name is unique; should return true', async function() {
      const testParam = 'stupid';
      request(app)
        .get(`/user/name?name=${ testParam }`)
        .expect(200, { isUnique: true})
    });

    it('check user name is unique; should return false', async function() {
      const testParam = 'sample_name1';
      request(app)
        .get(`/user/name?name=${ testParam }`)
        .expect(200, { isUnique: false})
    });
  });

  describe('GET /user/email?email=xxx', function() {

    it('check user email already exists; should return true', async function() {
      const testParam = 'sample@sample_email1.com';
      request(app)
        .get(`/user/email?email=${ testParam }`)
        .expect(200, { isAlreadyExists: true})
    });

    it('check user email already exists; should return false', async function() {
      const testParam = 'stupid@stupid.com';
      request(app)
        .get(`/user/email?email=${ testParam }`)
        .expect(200, { isAlreadyExists: false})
    });
  });
});


