import React, { Component } from 'react';
import {Link} from 'react-router'
import {logout} from '../reducers/auth'

export default class NavBar extends Component {

	render() {

    function logout() {

    }

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
          {this.props.currentUser ? this.renderLogout() : this.loginSignup()}
          <li><a href="" ><i className="material-icons">shopping_cart</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
    )
  }
   renderLogout() {
     return (
         <li><Link to='/account'>My Account</Link></li>
          <li onClick={logout}><Link to='/'>Logout</Link></li>
     )
  }

     renderSignup() {
     return (
        <li><Link to='/signup/'>Sign Up</Link></li>
          <li><Link to='/login/'>Log In</Link></li>

     )
  }
}

function mapStateToProps() {

}
