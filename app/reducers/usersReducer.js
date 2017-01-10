import {combineReducers} from 'redux';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from './actionCreators';

const initialState = {
  allUsers: [],
  currentUser: {}
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
  }
};

export default usersReducer;