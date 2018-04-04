/* global describe beforeEach it */

const {expect} = require('chai');
const request = require('supertest');
const db = require('../../server/db');
const app = require('../../server/index');
const User = db.model('user');
const Snippet = db.model('snippet');

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com';


    beforeEach( async () => {
      const testUser = await User.create({email: codysEmail, password: '123'});
      const testSnip = await Snippet.create({command:'test', code:'test snippet'});
      const testSnip2 = await Snippet.create({command:'test1', code: 'another one'})
      const owned = await Snippet.create({command:'test2', code: 'once again', creatorid: 1})
      testUser.addSnippet(testSnip);
    });

    it('As a non admin you cannot retrieve all users. GET /api/users', () => {
      return request(app)
        .get('/api/users')
        .expect(403);
    });

    it('gets all snippets created by user. Get /api/user/id/snippets', () => {
      return request(app)
        .get('/api/users/1/snippets/all')
        .expect(200)
        .then(res => {
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0].command).to.be.equal('test');
        });
    });

    it('updates user information. Put /api/user/:id', () => {
      return request(app)
        .put('/api/users/1')
        .send({email: "newTestEmail@test.test"})
        .expect(200)
        .then(res => {
          expect(res.body.email).to.be.equal('newTestEmail@test.test')
        })
    });

    it('associates a user with a snippet. Post /:id/snippets/:snippetId', () => {
      return request(app)
        .post('/api/users/1/snippets/2')
        .expect(200)
        .then(res => expect(res.body.code).to.be.equal('another one'))
    })

    it('deletes a user. DELETE api/user/id', () => {
      return request(app)
        .delete('/api/users/1')
        .expect(204);
    });

  });

}); // end describe('User routes')
