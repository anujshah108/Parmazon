import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import {logout} from 'APP/app/reducers/auth'
import store from '../store'

export default class NavBar extends Component {

  logOutFunc(){
    store.dispatch(logout())
  }
  componentDidMount() {
   var element = ReactDOM.findDOMNode(this.refs.dropdown)
   $(element).ready(function() {
     $(".dropdown-button").dropdown();
   });
  }

  render() {
    return (
    <div className="navbar-fixed">
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">one</a></li>
      <li><a href="#!">one</a></li>
      <li><a href="#!">one</a></li>
      <li><a href="#!">one</a></li>
    </ul>
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <ul className="left hide-on-med-and-down">
          <li><a href="/" ><i className="material-icons">Home</i></a></li>
          <li><a href="/">Home</a></li>
          <li><Link to='/products'>All Products</Link></li>
          <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
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
        <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
      </div>
    )
  }

  renderSignedin() {
    return (
      <div>
        <li><Link to='/myAccount'>My Account</Link></li>
        <li onClick={this.logOutFunc}><Link to='/'>Logout</Link></li>
        <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
      </div>
    )
  }
}
