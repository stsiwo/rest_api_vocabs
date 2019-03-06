import app from '../../../src/bootstrap'; 
import request from 'supertest';

interface IAccessTokenRequestContent {
    username: string, 
    email: string,
    password: string,
    client_id: string,
    grant_type: string
}

describe('OAuthController', function() {

  describe('POST /oauth/revoke', function() {

    it('delete refresh token', async function() {

      // cut and paste from db so need to change every time you test
      const targetRefreshToken = 'c074cbbc37d1079485632dc45a90f2d67b7945d3'; 

      await request(app)
        .post('/oauth/revoke')
        .type('form')
        .send(`refreshToken=${ targetRefreshToken }`)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(200, { message: "completed" })
    });

    it('fail to delete refresh token', async function() {

      // cut and paste from db so need to change every time you test
      const targetRefreshToken = 'xxx'; 

      await request(app)
        .post('/oauth/revoke')
        .type('form')
        .send(`refreshToken=${ targetRefreshToken }`)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(409, { message: "not completed" })
    });
  });

  describe('POST /oauth/token', function() {

    const successTestUser: IAccessTokenRequestContent = {
      username: 'sample_name1', 
      email: 'sample@sample_email1.com',
      password: "sample_password1",
      client_id: "sample_cid",
      grant_type: "password"
    }

    const failTestUser: IAccessTokenRequestContent = {
      username: 'dumb user', 
      email: 'deranged@deranged.user',
      password: "asshole_user",
      client_id: "sample_cid",
      grant_type: "password"
    }

    it('get access token successfully', async function() {

      await request(app)
        .post('/oauth/token')
        .type('form')
        .send(successTestUser)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(200, { message: "completed" })
    });

    /**
     * response : 503 (Service Unabailable) => there is not such user
     *  - should i change to another code because 503 sounds server technical issue
     *  - but i just want to show the there is no user requested
     *  #REFACTOR
     **/
    it('get access token failed', async function() {

      // cut and paste from db so need to change every time you test
      const targetRefreshToken = 'xxx'; 

      await request(app)
        .post('/oauth/token')
        .type('form')
        .send(failTestUser)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .expect(409, { message: "not completed" })
    });
  });
});



