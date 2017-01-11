import React, { Component } from 'react';
import {Link} from 'react-router'

export default class NavBar extends Component {

	render() {  
    
    
    return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <ul className="left hide-on-med-and-down">
          <li><a href="" ><i className="material-icons">visibility</i></a></li>
          <li><a href="sass.html">Categories</a></li>
          <li><a href="badges.html">thing2</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><Link to='/signup/'>Sign Up</Link></li>
          <li><Link to='/login/'>Log In</Link></li>
          <li><Link to='/account'>My Account</Link></li>
          <li><Link to='/'>Logout</Link></li>
          <li><a href="" ><i className="material-icons">shopping_cart</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
    )
  }
}