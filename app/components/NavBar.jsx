import React, { Component } from 'react';
import {Link} from 'react-router'
import {logout} from 'APP/app/reducers/auth'
import store from '../store'

export default class NavBar extends Component {

  logOutFunc(){
    store.dispatch(logout())
  }

  render() {
    return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <ul className="left hide-on-med-and-down">
          <li><a href="/" ><i className="material-icons">Home</i></a></li>
          <li><a href="/">Home</a></li>
          <li><a href="">All Products</a></li>
          <li><a href="">Categories</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          {(this.props.user.id ? this.renderSignedin() : this.renderSignedout())}
        </ul>
      </div>
    </nav>
  </div>
    )
  }


  renderSignedout() {
    return (
      <div>
        <li><Link to='/signup/'>Sign Up</Link></li>
        <li><Link to='/login/'>Log In</Link></li>
        <li><a href="" ><i className="material-icons">shopping_cart</i></a></li>
      </div>
    )
  }

  renderSignedin() {
    return (
      <div>
        <li><Link to='/'>My Account</Link></li>
        <li onClick={this.logOutFunc}><Link to='/'>Logout</Link></li>
        <li><Link to='/cart/'><i className="material-icons">shopping_cart</i></Link></li>
      </div>
    )
  }
}
