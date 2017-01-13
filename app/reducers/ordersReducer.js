import {combineReducers} from 'redux';
import {RECEIVE_ALL_ORDERS, RECEIVE_CART, RECEIVE_ORDER, RECEIVE_USER_ORDERS, RECEIVE_ORDER_PRODUCTS, RECEIVE_CART_PRODUCTS, RECEIVE_CREATED_ORDER} from './actionCreators';

const initialState = {
  allOrders: [],
  currentOrder: {},
  userOrders: [],
  cart: {},
  cartProducts: [],
  currentOrderProducts: []
};

const ordersReducer = function(state = initialState, action) {
  switch (action.type) {
      case RECEIVE_ALL_ORDERS:
        return Object.assign({}, state, {
          allOrders: action.orders
        });
        case RECEIVE_CREATED_ORDER:
        return Object.assign({}, state, {
          cart: action.order
        });
      case RECEIVE_USER_ORDERS:
      return Object.assign({}, state, {
        userOrders: action.orders
      });
       case RECEIVE_ORDER_PRODUCTS:
      return Object.assign({}, state, {
        currentOrderProducts: action.products
      });
      case RECEIVE_CART_PRODUCTS:
      return Object.assign({}, state, {
        cartProducts: action.products
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