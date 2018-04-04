/* global describe beforeEach it */

const {expect} = require('chai');
const request = require('supertest');
const db = require('../../server/db');
const app = require('../../server/index');
const User = db.model('user');
const Cart = db.model('cart');

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com';


    beforeEach( async () => {
      const testUser = await User.create({email: codysEmail});
      const testCart = await Cart.create({});
      testUser.setCart(testCart);
    });

    it('As a non admin you cannot retrieve all users. GET /api/users', () => {
      return request(app)
        .get('/api/users')
        .expect(403);
    });

    it('gets a users cart. Get /api/user/id/cart', () => {
      return request(app)
        .get('/api/users/1/cart')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.id).to.be.equal(1);
        });
    });

    it('sets a users cart. Put /api/user/id/cart', () => {
      return request(app)
        .put('/api/users/1/cart')
        .send({cartId: 1})
        .expect(201);
    });

    it('deletes a user. DELETE api/user/id', () => {
      return request(app)
        .delete('/api/users/1')
        .expect(204);
    });

  });

}); // end describe('User routes')
