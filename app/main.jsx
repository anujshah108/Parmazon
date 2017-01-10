'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import HomePage from './components/HomePage'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NavBar from './components/NavBar'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)