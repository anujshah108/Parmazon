'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Signup from './components/Signup'
import WhoAmI from './components/WhoAmI'
import Product from './containers/ProductContainer'
import ProductManagement from './components/ProductManagement'
import {fetchProductsFromServer, fetchSingleProduct, fetchRatingforProduct, fetchOrdersFromServer, fetchUserOrdersFromServer, fetchReviewsforProduct, fetchOpenCart} from './reducers/actionCreators'
import App from './components/App'
import Orders from './containers/OrdersContainer'
import Order from './components/Order'

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

const onSingleProductEnter = function(nextRouterState) {
  store.dispatch(fetchSingleProduct(nextRouterState.params.productId));
  store.dispatch(fetchRatingforProduct(nextRouterState.params.productId));
  store.dispatch(fetchReviewsforProduct(nextRouterState.params.productId));

};


render (
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={App}>
      <IndexRoute component={HomePage} onEnter={onHomePageEnter} />
    	<Route path='/products/:productId' component={Product} onEnter={onSingleProductEnter}/>
        <Route path='/myAccount/orders' component={Orders} onEnter={onOrdersEnter} />
        <Route path='/myAccount/orders/:id' component={Order} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/admin' component={ProductManagement}/>
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