import app from '../../../src/bootstrap'; 
import request from 'supertest';
import { Response } from 'superagent';

/**
 * need to find the way to clean up (possibly transaction and rollback after testing) the test data in database
 **/
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
      await request(app)
        .get(`/user/name?name=${ testParam }`)
        .expect(200, { isUnique: true})
    });

    it('check user name is unique; should return false', async function() {
      const testParam = 'sample_name1';
      await request(app)
        .get(`/user/name?name=${ testParam }`)
        .expect(200, { isUnique: false})
    });
  });

  describe('GET /user/email?email=xxx', function() {

    it('check user email already exists; should return true', async function() {
      const testParam = 'sample@sample_email1.com';
      await request(app)
        .get(`/user/email?email=${ testParam }`)
        .expect(200, { isAlreadyExists: true})
    });

    it('check user email already exists; should return false', async function() {
      const testParam = 'stupid@stupid.com';
      await request(app)
        .get(`/user/email?email=${ testParam }`)
        .expect(200, { isAlreadyExists: false})
    });
  });

  describe('POST /user', function() {
     
    const testUser = { name: "test_user", email: "test@test.com", password: "my_password" };

    it('create new user', async function() {

      await request(app)
        .post(`/user`)
        .type('form')
        .send(testUser)
        .set('Accept', 'application/x-www-form-urlencoded')
        .expect(200, { isSignUpCompleted: true})
    });

  });
});


