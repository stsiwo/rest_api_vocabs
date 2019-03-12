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

  describe('POST /user/:usrename/image', function() {
     
    const testUser = "sample_name1";
    const testWords = [
      {
        id: "5b0b81b0-de6e-44a4-9847-b44c5cdbd2de",
        defs: [
          {
            id: "b8f1449e-4da6-46ad-b0d3-e86bb749699f",
            def: "test_def1",
            image: "https://.../sample_name1/5b0b81b0-de6e-44a4-9847-b44c5cdbd2de/b8f1449e-4da6-46ad-b0d3-e86bb749699f/dssfo2om4nugaokxqp1t",
            wordId:  "5b0b81b0-de6e-44a4-9847-b44c5cdbd2de",
          },
          {
            id: "bd2c7bf5-df5a-4889-aff5-d604ec7a9773",
            def: "test_def1",
            image: "https://.../sample_name1/5b0b81b0-de6e-44a4-9847-b44c5cdbd2de/bd2c7bf5-df5a-4889-aff5-d604ec7a9773/v4forzgshjevmrztxikf",
            wordId:  "bd2c7bf5-df5a-4889-aff5-d604ec7a9773",
          },
          {
            id: "cd768c9c-8833-4167-b263-ee6610432255",
            def: "test_def1",
            image: "https://.../sample_name1/5b0b81b0-de6e-44a4-9847-b44c5cdbd2de/cd768c9c-8833-4167-b263-ee6610432255/ihpovqlscygzpbfbfee0",
            wordId:  "cd768c9c-8833-4167-b263-ee6610432255",
          },
        ],
        name: "test_word1",
        creationDate: "string"
      }
    ];

    it('create new user', async function() {

      await request(app)
        .delete(`/user/${ testUser }/image`)
        .set('Authorization', 'bearer ' + "34c309a0a297a915d0dc30142d8a5232f056df53" )
        .type('form')
        .send(testWords)
        .set('Content-Type', 'application/json')
        .expect(200, { isOk: true})
    });
  });

});


