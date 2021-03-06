import { expect } from 'chai';



import {createStore} from 'redux';
import productsReducer from '../app/reducers/productsReducer';


describe('products reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(productsReducer);
    });

    it('has proper initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            allProducts: [],
            currentProduct: {},
            currentProductRating: {stars: 5},
            currentProductReviews: []
        })
    })

    it('places all products on the state', () => {
        testStore.dispatch({type: 'RECEIVE_ALL_PRODUCTS', products: [{name: 'CheddarX', price: 2000.00, stockQuantity: 10},
        {name: 'American', price: 10.00, stockQuantity: 10}]})

        expect(testStore.getState().allProducts).to.be.deep.equal(
            [{name: 'CheddarX', price: 2000.00, stockQuantity: 10},
                {name: 'American', price: 10.00, stockQuantity: 10}]
        )
    })

    it('can receive product', () => {
        testStore.dispatch({type: 'RECEIVE_PRODUCT', product: {name: 'Halloumi', price: 0.01, stockQuantity: 10, summary: ['Very Good Cheese']}})
        expect(testStore.getState().currentProduct).to.be.deep.equal({
            name: 'Halloumi', price: 0.01, stockQuantity: 10, summary: ['Very Good Cheese']}
        )
    })
    it('can receive a rating', () => {
        testStore.dispatch({type: 'RECEIVE_RATING', rating: 3})
        expect(testStore.getState().currentProductRating).to.be.deep.equal(3)
    })

    it('can receive reviews', () => {
        testStore.dispatch({type: 'RECEIVE_REVIEWS', reviews: [{title: 'hungry employees', body: 'My wheel of cheese had bite marks on it, tasted fine though', stars: 1, author_id: 1, product_id: 1}]})
        expect(testStore.getState().currentProductReviews).to.be.deep.equal([{title: 'hungry employees', body: 'My wheel of cheese had bite marks on it, tasted fine though', stars: 1, author_id: 1, product_id: 1}])
    })

})

