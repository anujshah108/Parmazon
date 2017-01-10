import {combineReducers} from 'redux';
import {RECEIVE_ALL_ORDERS, RECEIVE_ORDER} from './actionCreators';

const initialState = {
  allOrders: [],
  currentOrder: {},
  userOrders: []
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
  }
};

export default ordersReducer;