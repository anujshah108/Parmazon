import {combineReducers} from 'redux';
import {RECEIVE_ALL_ORDERS, RECEIVE_CART, RECEIVE_ORDER, RECEIVE_USER_ORDERS} from './actionCreators';

const initialState = {
  allOrders: [],
  currentOrder: {},
  userOrders: [],
  cart: {}
};

const ordersReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_ORDERS:
      return Object.assign({}, state, {
        allOrders: action.orders
      });
      case RECEIVE_USER_ORDERS:
      return Object.assign({}, state, {
        userOrders: action.orders
      });
    case RECEIVE_ORDER:
      return Object.assign({}, state, {
        currentOrder: action.order
      });
      case RECEIVE_CART:
      return Object.assign({}, state, {
        cart: action.cart
      });
    default: return state;
  }
};

export default ordersReducer;