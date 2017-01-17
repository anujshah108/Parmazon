import { expect } from 'chai';



import {createStore} from 'redux';
import usersReducer from './usersReducer';

describe('users reducer', () => {
  let usersTestStore;
  beforeEach('Creating users test store', () => {
    usersTestStore = createStore(usersReducer);
  })

  it('should have initial state', () => {
    expect(usersTestStore.getState()).to.be.deep.equal({
      allUsers: [],
      currentUser: {},
      singleUser:{}
    })
  });

  it('something', () => {
    usersTestStore.dispatch({
      type: 'RECEIVE_ALL_USERS',
      users: [{firstName: 'Nikola', lastName: 'Tesla', isAdmin: true, email: 'AC@DC.com', password: 'buzz'},{firstName: 'AC', lastName: 'DC', isAdmin: false, email: 'highVoltage@zzz.com', password: 'caad'}]
    })
    expect(usersTestStore.getState().allUsers).to.be.deep.equal([{
      firstName: 'Nikola', lastName: 'Tesla', isAdmin: true, email: 'AC@DC.com', password: 'buzz'}, {firstName: 'AC', lastName: 'DC', isAdmin: false, email: 'highVoltage@zzz.com', password: 'caad'
    }])
  });

  it('should be able to receieve a single user', () => {
    usersTestStore.dispatch({
      type: 'RECEIVE_USER',
      user: {firstName: 'Bill', lastName: 'Clinton', isAdmin: true, email: 'clinton@harlem.gov', password: '09123'}
    })
    expect(usersTestStore.getState().currentUser).to.be.deep.equal({firstName: 'Bill', lastName: 'Clinton', isAdmin: true, email: 'clinton@harlem.gov', password: '09123'})
  });

  it('logging out sets state of current user correctly', () => {
    usersTestStore.dispatch({
      type: 'LOGOUT_USER',
      user: {firstName: 'n', lastName: 'Sync', isAdmin: true, email: 'byebyebye@cya.com', password: 'imout'}
    })
      expect(usersTestStore.getState().currentUser).to.be.deep.equal({firstName: 'n', lastName: 'Sync', isAdmin: true, email: 'byebyebye@cya.com', password: 'imout'})
  });



})

