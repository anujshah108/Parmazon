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

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
      <NavBar />
        {user ? <WhoAmI/> : <Login/>}

      </nav> 
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)