import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./productsReducer').default,
  orders:  require('./ordersReducer').default,
  users: require('./usersReducer').default
})

export default rootReducer
