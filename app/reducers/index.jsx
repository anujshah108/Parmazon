import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./productsReducer'),
  orders:  require('./ordersReducer'),
  users: require('./usersReducer')
})

export default rootReducer
