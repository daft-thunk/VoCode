/* global describe beforeEach it */

const {expect} = require('chai');
const request = require('supertest');
const db = require('../../server/db');
const app = require('../../server/index');
const User = db.model('user');
const Snippet = db.model('snippet');

describe('Snippet routes', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('/api/snippets/', () => {
    const codysEmail = 'cody@puppybook.com';


    beforeEach( async () => {
      const testUser = await User.create({email: codysEmail, password: '123'});
      const testSnip = await Snippet.create({command:'test', code:'test snippet'});
      const testSnip2 = await Snippet.create({command:'test1', code: 'another one'})
      const owned = await Snippet.create({command:'test2', code: 'once again', creatorid: 1})
      testUser.addSnippet(testSnip);
    });

    it('Gets all snippets. GET /api/snippet', () => {
      return request(app)
        .get('/api/snippet')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].id).to.be.equal(1)
        })
    });

    it('gets all snippets created by user. Get /api/snippets/:id', () => {
      return request(app)
        .get('/api/snippet/2/')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.command).to.be.equal('test1');
        });
    });

    it('Creates a snippet. Post /api/snippet', () => {
      return request(app)
        .post('/api/snippet')
        .send({userId: 1, command: 'added', code:'new command', description: 'im an added command'})
        .expect(200)
        .then(res => {
          expect(res.body.command).to.be.equal('added')
        })
    });

    it('updates a snippet', () => {
      return request(app)
        .put('/api/snippet')
        .expect(200)
        .send({id: 2, command:'updated', code: 'huzzah'})
        .then(res => expect(res.body.command).to.be.equal('updated'))
    })


   });

}); // end describe('User routes')
