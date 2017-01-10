'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import HomePage from './components/HomePage'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NavBar from './components/NavBar'
import products from './components/Products'
import product from './components/Product'


render (
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/'>
    	<Route path='/products/:id' component={product}/>
    		{/**<Route path='/products' component={products}/>
    		    		<Route path='/products/category?' component={products}/>
    		    		
    		    		<Route path='/products/filter?' component={products}/>
    		    		<Route path='/cart' component={cart}/>
    		    		<Route path='/products' component={products}/>
    		    		<Route path='/login' component={login}/>
    		    		<Route path='/signup' component={signup}/>
    		    		<Route path='/myAccount' component={Account}/>
    		    		<Route path='/myAccount/orderHistory' component={orderHistory}/>
    		    		<Route path='/myAccount/orderHistory/:id' component={order}/>
    		    		<Route path='/checkout' component={checkout}/>
    		    		<Route path='/checkout' component={checkout}/>
    		**/}
    		<IndexRoute component={HomePage}/>
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)