const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  describe('products routes', () => {
    it('GET all products', () =>
      request(app)
        .get(`/api/products`)
        .expect(200)
    )

    it('POST creates a product', () =>
      request(app)
        .post('/api/products', {
          name: 'cheeseTest',
          price: 4.44,
          stockQuantity: 100,
          summary: ['Really Great Cheese'],
          description: 'The best cheese in the whole world',
          imageURL: 'www.cheeseimage.com',
          categories: 'cheese',
          location: 'New York',
          age: 23
        })
        .expect(201)
    )

    it('POST fails to create a product when missing info', () =>
      request(app)
        .post('/api/products')
        .send({
          name: 'eve@interloper.com',
          price: 4.44
        })
        .expect(500)
    )
  })
})