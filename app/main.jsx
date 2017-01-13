'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Cart from './components/Cart'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Signup from './components/Signup'
import WhoAmI from './components/WhoAmI'
import Product from './containers/ProductContainer'
import Products from './containers/ProductsContainer'
import ProductManagement from './components/ProductManagement'
import {fetchProductsFromServer, fetchSingleProduct, fetchRatingforProduct,
  fetchOrdersFromServer, fetchReviewsforProduct, fetchOpenCart,
  fetchUsersFromServer, fetchSingleOrder, fetchProductsForOrder,
  fetchUserOrdersFromServer} from './reducers/actionCreators'
import App from './components/App'
import Orders from './containers/OrdersContainer'
import Order from './containers/OrderContainer'
import Users from './containers/UsersContainer'
import UsersList from './components/UsersList'
import MyAccountContainer from './containers/MyAccountContainer'
import CartContainer from './containers/CartContainer'
import Admin from './components/Admin'
import Checkout from './components/Checkout'
import CategoryProduct from './containers/CategoryProductContainer'

const onHomePageEnter = function() {
  store.dispatch(fetchProductsFromServer());
  store.dispatch(fetchOpenCart());
};

const onOrdersEnter = function() {
  // let currentUser = store.users.currentUser
  // console.log('~~~~~~~~~~~~~~~~~~', currentUser);
  //if(currentUser.isAdmin) store.dispatch(fetchOrdersFromServer());
   //store.dispatch(fetchUserOrdersFromServer(1))
   store.dispatch(fetchOrdersFromServer());
}

const onUsersEnter = function(){
   store.dispatch(fetchUsersFromServer());

}

const onOrderEnter = function(nextRouterState){
  store.dispatch(fetchSingleOrder(nextRouterState.params.orderId));
  store.dispatch(fetchProductsForOrder(nextRouterState.params.orderId))
}

const onSingleProductEnter = function(nextRouterState) {
  store.dispatch(fetchSingleProduct(nextRouterState.params.productId));
  store.dispatch(fetchRatingforProduct(nextRouterState.params.productId));
  store.dispatch(fetchReviewsforProduct(nextRouterState.params.productId));

};

const onSingleUserEnter = function(nextRouterState) {
  store.dispatch(fetchUserOrdersFromServer(nextRouterState.params.userId))
}

const onCartEnter = function(nextRouterState) {
   store.dispatch(fetchOpenCart());
}



render (
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={App}>
      <IndexRoute component={HomePage} onEnter={onHomePageEnter} />
    	<Route path='/products/:productId' component={Product} onEnter={onSingleProductEnter}/>
      <Route path='/products' component={Products} onEnter={onHomePageEnter}/>
      <Route path='/products/category/:cat' component={CategoryProduct} onEnter={onHomePageEnter}/>
      <Route path='/myAccount/orders' component={Orders} onEnter={onOrdersEnter} />
      <Route path='/myAccount/orders/:orderId' component={Order} onEnter={onOrderEnter}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/myAccount' component={Admin}/>
      <Route path='/myAccount/users' component={Users} onEnter={onUsersEnter}/>
      <Route path='/myAccount/users/:userId' component={MyAccountContainer} onEnter={onSingleUserEnter}/>
      <Route path='/myAccount/users/:userId/orders' component={MyAccountContainer} onEnter={onSingleUserEnter}/>
      <Route path='/cart' component={CartContainer} onEnter={onCartEnter}/>
      <Route path='/checkout' component={Checkout} />
    		{/**<Route path='/products' component={products}/>
    		    		<Route path='/products/category?' component={products}/>

    		    		<Route path='/products/filter?' component={products}/>
    		    		<Route path='/cart' component={cart}/>
    		    		<Route path='/products' component={products}/>
    		    		<Route path='/myAccount' component={Account}/>
    		    		<Route path='/myAccount/orderHistory' component={orderHistory}/>
    		    		<Route path='/myAccount/orderHistory/:id' component={order}/>
    		    		<Route path='/checkout' component={checkout}/>
    		    		<Route path='/checkout' component={checkout}/>
    		**/}
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)