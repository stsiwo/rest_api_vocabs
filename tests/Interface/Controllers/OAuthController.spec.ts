import app from '../../../src/bootstrap'; 
import request from 'supertest';

describe('OAuthController', function() {

  describe('post', function() {

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
});



