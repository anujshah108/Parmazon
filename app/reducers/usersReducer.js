import {combineReducers} from 'redux';
import {RECEIVE_ALL_USERS, RECEIVE_USER_FOR_PAGE, RECEIVE_USER, LOGOUT_USER} from './actionCreators';

const initialState = {
  allUsers: [],
  currentUser: {},
  singleUser: {}
};

const usersReducer = function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, {
        allUsers: action.users
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        currentUser: action.user
      })
    case RECEIVE_USER_FOR_PAGE:
      return Object.assign({}, state, {
        singleUser: action.user
      });
    default: return state;
  }
};

export default usersReducer;