import { expect } from 'chai';


// actions

import { receiveAllProducts, receiveProduct, fetchProductsFromServer, fetchSingleProduct, receiveAllOrders, receiveOrder, receiveAllUserOrders, sendCreatedCart, fetchOrdersFromServer, fetchUserOrdersFromServer, fetchSingleOrder,receiveAllUsers, receiveUser, logOutUser,fetchUsersFromServer, fetchSingleUser, receiveRating, receiveReviews, receiveCart, fetchRatingforProduct, receiveProductsForOrder, receiveProductsForCart } from './actionCreators';

// PRODUCTS
describe('products actions', () => {

  describe('receiveAllProducts', () => {

    it('returns properly formatted action', () => {

        const testproducts = [{name: 'CheddarX', price: 2000.00, stockQuantity: 10},
        {name: 'American', price: 10.00, stockQuantity: 10}];

        expect(receiveAllProducts(testproducts)).to.be.deep.equal({
            type: 'RECEIVE_ALL_PRODUCTS',
            products: testproducts
        });
    });
  })

  describe('receiveProduct', () => {

    it('returns properly formatted action', () => {

        const testproduct = {name: 'Nachos', price: 1.00, stockQuantity: 10000};

        expect(receiveProduct(testproduct)).to.be.deep.equal({
            type: 'RECEIVE_PRODUCT',
            product: testproduct
        });

    });
  })

});

// ORDERS
describe('orders actions', () => {

  let testOrdersData, testSingleOrderData;
  beforeEach('Create test data', () => {

      testOrdersData = [
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 6},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 7}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 5, ordered_product_id: 8},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 6,ordered_product_id: 9}
        ];

      testSingleOrderData = testOrdersData[0]
  });

  describe('receiveAllOrders', () => {

    it('returns properly formatted action', () => {

        expect(receiveAllOrders(testOrdersData)).to.be.deep.equal({
            type: 'RECEIVE_ALL_ORDERS',
            orders: testOrdersData
        });
    });
  })

describe('receiveOrder', () => {

    it('returns properly formatted action', () => {

        expect(receiveOrder(testSingleOrderData)).to.be.deep.equal({
            type: 'RECEIVE_ORDER',
            order: testSingleOrderData
        });
    });
  })

  describe('receiveAllUserOrders', () => {

    it('returns properly formatted action for receiving a user order', () => {

        expect(receiveAllUserOrders(testOrdersData)).to.be.deep.equal({
            type: 'RECEIVE_USER_ORDERS',
            orders: testOrdersData
        });
    });
  })

  describe('sendCreatedCart', () => {

    it('returns properly formatted action', () => {

        expect(sendCreatedCart(testSingleOrderData)).to.be.deep.equal({
            type: 'RECEIVE_CREATED_ORDER',
            order: testSingleOrderData
        });
    });
  })

});

// USERS
describe('users actions', () => {

  let testUsersData, testSingleUserData;
    beforeEach('Create test data', () => {

        testUsersData = [{firstName: 'Nikola', lastName: 'Tesla', isAdmin: true, email: 'AC@DC.com', password: 'buzz'}, {firstName: 'AC', lastName: 'DC', isAdmin: false, email: 'highVoltage@zzz.com', password: 'caad'}];

        testSingleUserData = testUsersData[0]
    });

  describe('receiveAllUsers', () => {

    it('returns properly formatted action', () => {

        expect(receiveAllUsers(testUsersData)).to.be.deep.equal({
            type: 'RECEIVE_ALL_USERS',
            users: testUsersData
        });
    });
  })

  describe('receiveUser', () => {

      it('returns properly formatted action', () => {

          expect(receiveUser(testSingleUserData)).to.be.deep.equal({
              type: 'RECEIVE_USER',
              user: testSingleUserData
          });
      });
  })

  describe('logOutUser', () => {

    it('returns properly formatted action', () => {

        expect(logOutUser(testUsersData)).to.be.deep.equal({
            type: 'LOGOUT_USER',
            user: {}
        });
    });
  })

})

// REVIEWS
describe('reviews actions', () => {

  let ratingData, reviewsData;
  beforeEach('Create test data', () => {
      ratingData = {
        data: 100,
        };
        reviewsData = {
          data: 'awesome'
        }
  });

  describe('receiveRating', () => {

    it('returns properly formatted action for ratings data', () => {

        expect(receiveRating(ratingData)).to.be.deep.equal({
            type: 'RECEIVE_RATING',
            rating: ratingData.data
        });
    });
  })

  describe('receiveReviews', () => {

      it('returns properly formatted action for reviews data', () => {

        expect(receiveReviews(reviewsData)).to.be.deep.equal({
          type: 'RECEIVE_REVIEWS',
          reviews: reviewsData.data
        })
      });
    })

})

// CART
describe('cart actions', () => {

  let testCart, testCartData, reviewsData;
  beforeEach('Create test cart', () => {
      testCart = {
        data: [{
          swiss: 5,
          sheepsMilk: 1
        }, {
          reviewsData: 'everthing still fresh'
        }]
      }
  });

  describe('receiveCart', () => {

    it('returns properly formatted action for cart data', () => {

        expect(receiveCart(testCart)).to.be.deep.equal({
            type: 'RECEIVE_CART',
            cart: testCart.data[0]
        });
    });
  })
})

//  productOrders for Order/Cart
describe('receiving products actions', () => {

  let testProducts, reviewsData, productsData
  beforeEach('Create test data', () => {
      testProducts = {
        data: [{name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 1, ordered_product_id: 6},
        {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 2,ordered_product_id: 7}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 3, ordered_product_id: 9},
        {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 4,ordered_product_id: 8}
        ]}
        reviewsData = {
          data: ['awesome', 'smelly', 'juicy']
        }

        productsData = testProducts.data
  });

  it('returns properly formatted action for cart data', () => {

    expect(receiveProductsForOrder(testProducts)).to.be.deep.equal({
      type: 'RECEIVE_ORDER_PRODUCTS',
      products: productsData
    })
  })

  it('returns properly formatted action for cart data', () => {
    expect(receiveProductsForCart(testProducts)).to.be.deep.equal({
        type: 'RECEIVE_CART_PRODUCTS',
        products: productsData
      })
  })

})

 // remove .only!
