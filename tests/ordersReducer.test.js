import { expect } from 'chai';


import {createStore} from 'redux';
import ordersReducer from '../app/reducers/ordersReducer';

describe('orders reducer', () => {

    let ordersTestStore;
    beforeEach('Create testing store', () => {
        ordersTestStore = createStore(ordersReducer);
    });

    it('has proper initial state', () => {
        expect(ordersTestStore.getState()).to.be.deep.equal({
            allOrders: [],
            currentOrder: {},
            userOrders: [],
            cart: {},
            cartProducts: [],
            currentOrderProducts: []
        })
    })

    it('can receive ever order', () => {
      ordersTestStore.dispatch({
        type: 'RECEIVE_ALL_ORDERS',
        orders: [
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ]
      })
      expect(ordersTestStore.getState().allOrders).to.be.deep.equal([
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ])
    });

    it('can receive a created order', () => {
      ordersTestStore.dispatch({
        type: 'RECEIVE_CREATED_ORDER',
        order: {
          name: 'Cheetos', price: 0.99, imageURL: 'http://flaminghot.com/crunchy.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5
        }
      })
      expect(ordersTestStore.getState().cart).to.be.deep.equal(
        {name: 'Cheetos', price: 0.99, imageURL: 'http://flaminghot.com/crunchy.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5
        }
      )
    });

    it('can receive orders for users', () => {

      ordersTestStore.dispatch({
        type: 'RECEIVE_USER_ORDERS',
        orders: [
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ]
      })
      expect(ordersTestStore.getState().userOrders).to.be.deep.equal([
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ])
    });

    it('places order products on state', () => {

      ordersTestStore.dispatch({
        type: 'RECEIVE_ORDER_PRODUCTS',
        products: [
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ]
      })
      expect(ordersTestStore.getState().currentOrderProducts).to.be.deep.equal([
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ])

    });

    it('places order products onto state', () => {

      ordersTestStore.dispatch({
        type: 'RECEIVE_CART_PRODUCTS',
        products: [
          {name: 'String cheese'},
          {name: 'Cheese curds'}
        ]
      })
      expect(ordersTestStore.getState().cartProducts).to.be.deep.equal([
          {name: 'String cheese'},
          {name: 'Cheese curds'}
        ])
    });

    it('order can be placed on state', () => {
       ordersTestStore.dispatch({
        type: 'RECEIVE_ORDER',
        order: {
          name: 'Notyocheese', price: 29.99, imageURL: 'http://getyourown.com/mine.jpg', quantity: 2, userid: 100, inCart: true, order_id: 2, ordered_product_id: 999
        }
      })
      expect(ordersTestStore.getState().currentOrder).to.be.deep.equal(
        {name: 'Notyocheese', price: 29.99, imageURL: 'http://getyourown.com/mine.jpg', quantity: 2, userid: 100, inCart: true, order_id: 2, ordered_product_id: 999
        }
      )
    });

    it('places the cart object in the state', () => {
      ordersTestStore.dispatch({
        type: 'RECEIVE_CART',
        cart: {
          name: 'Notyocheese', price: 29.99, imageURL: 'http://getyourown.com/mine.jpg', quantity: 2, userid: 100, inCart: true, order_id: 2, ordered_product_id: 999
        }
      })
      expect(ordersTestStore.getState().cart).to.be.deep.equal(
        {name: 'Notyocheese', price: 29.99, imageURL: 'http://getyourown.com/mine.jpg', quantity: 2, userid: 100, inCart: true, order_id: 2, ordered_product_id: 999
        }
      )
    });





})
