import { expect } from 'chai';


import {createStore} from 'redux';
import productsReducer from './ordersReducer';

describe('products reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(productsReducer);
    });

    it('has proper initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            allProducts: [],
            currentProduct: {},
            currentProductRating: 0,
            currentProductReviews: []
        })
    })

})