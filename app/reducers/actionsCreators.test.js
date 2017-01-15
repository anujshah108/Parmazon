import { expect } from 'chai';


// actions

import { receiveAllProducts, receiveProduct, fetchProductsFromServer, fetchSingleProduct, receiveAllOrders, receiveOrder, receiveAllUserOrders, fetchOrdersFromServer, fetchUserOrdersFromServer, fetchSingleOrder,receiveAllUsers, receiveUser, logOutUser,fetchUsersFromServer, fetchSingleUser, receiveRating, fetchRatingforProduct } from './actionCreators';


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

describe('orders actions', () => {

  describe('receiveAllOrders', () => {

    it('returns properly formatted action', () => {

        const testOrders = [
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}, {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
          {name: 'Cheese powder', price: 10.00, imageURL: 'http://kraft.com/yellow.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
        ];

        expect(receiveAllOrders(testOrders)).to.be.deep.equal({
            type: 'RECEIVE_ALL_ORDERS',
            orders: testOrders
        });
    });
  })

describe('receiveOrder', () => {

    it('returns properly formatted action', () => {

        const testOrder =
          {name: 'Velveeta', price: 5.99, imageURL: 'http://liquidgold.com/ooze.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5};

        expect(receiveOrder(testOrder)).to.be.deep.equal({
            type: 'RECEIVE_ORDER',
            order: testOrder
        });
    });
  })
});

describe('users actions', () => {

  let testUsersData, testSingleUserData;
    beforeEach('Create test data', () => {

        testUsersData = [{firstName: 'Nikola', lastName: 'Tesla', isAdmin: true, email: 'AC@DC.com', password: 'buzz'}, {firstName: 'AC', lastName: 'DC', isAdmin: false, email: 'highVoltage@zzz.com', password: 'caad'}];

        testSingleUserData = testUsersData[0]
    });

  describe('receiveAllUsers', () => {

    it('returns properly formatted action', () => {

        // const testUsers = [{firstName: 'Nikola', lastName: 'Tesla', isAdmin: true, email: 'AC@DC.com', password: 'buzz'},{firstName: 'AC', lastName: 'DC', isAdmin: false, email: 'highVoltage@zzz.com', password: 'caad'}];

        expect(receiveAllUsers(testUsersData)).to.be.deep.equal({
            type: 'RECEIVE_ALL_USERS',
            users: testUsersData
        });
    });
  })

describe('receiveUser', () => {

    it('returns properly formatted action', () => {

        // const testUser =
        //   {firstName: 'Joe', lastName: 'Schmoe', isAdmin: false, email: 'AC@DC.com', password: 'buzz'};

        expect(receiveUser(testSingleUserData)).to.be.deep.equal({
            type: 'RECEIVE_USER',
            user: testSingleUserData
        });
    });
  })
  describe('logOutUser', () => {

    it('returns properly formatted action', () => {

        // const testLogOutUser =
        //   {firstName: 'Joe', lastName: 'Schmoe', isAdmin: false, email: 'AC@DC.com', password: 'buzz'};

        expect(logOutUser(testUsersData)).to.be.deep.equal({
            type: 'LOGOUT_USER',
            user: {}
        });
    });
  })
})

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

    it('returns properly formatted action', () => {

        expect(receiveRating(ratingData)).to.be.deep.equal({
            type: 'RECEIVE_RATING',
            rating: ratingData.data
        });
    });
  })

describe('receiveUser', () => {

    it('returns properly formatted action', () => {

        const testUser =
          {firstName: 'Joe', lastName: 'Schmoe', isAdmin: false, email: 'AC@DC.com', password: 'buzz'};

        expect(receiveUser(testUser)).to.be.deep.equal({
            type: 'RECEIVE_USER',
            user: testUser
        });
    });
  })
  describe('logOutUser', () => {

    it('returns properly formatted action', () => {

        const testLogOutUser =
          {firstName: 'Joe', lastName: 'Schmoe', isAdmin: false, email: 'AC@DC.com', password: 'buzz'};

        expect(logOutUser(testLogOutUser)).to.be.deep.equal({
            type: 'LOGOUT_USER',
            user: {}
        });
    });
  })

})



 // remove .only!
