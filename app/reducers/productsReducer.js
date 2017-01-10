import {combineReducers} from 'redux';
import {RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from './actionCreators';

const initialState = {
	allProducts: [],
	currentProduct: {}
};

const productsReducer = function(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_ALL_PRODUCTS:
			return Object.assign({}, state, {
				allProducts: action.products
			});
		case RECEIVE_PRODUCT:
			return Object.assign({}, state, {
				currentProduct: action.product
			});
		default: return state;
	}
};

export default productsReducer;