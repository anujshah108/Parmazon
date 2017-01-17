import {combineReducers} from 'redux';
import {RECEIVE_ALL_PRODUCTS, RECEIVE_REVIEWS, RECEIVE_PRODUCT, RECEIVE_RATING, DELETE_PRODUCT} from './actionCreators';

const initialState = {
	allProducts: [],
	currentProduct: {},
	currentProductRating: {stars: 5},
	currentProductReviews: []
};

const productsReducer = function(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_ALL_PRODUCTS:
			return Object.assign({}, state, {
				allProducts: action.products
			});
			case RECEIVE_REVIEWS:
			return Object.assign({}, state, {
				currentProductReviews: action.reviews
			});
			case DELETE_PRODUCT:
        return Object.assign({}, state, {
          allProducts: state.allProducts.filter(product => product.id !== action.product)
        });
			case RECEIVE_RATING:
			return Object.assign({}, state, {
				currentProductRating: action.rating
			});
		case RECEIVE_PRODUCT:
			return Object.assign({}, state, {
				currentProduct: action.product
			});
		default: return state;
	}
};

export default productsReducer;