import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router'
import {logout} from 'APP/app/reducers/auth'
import store from '../store'



export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  logOutFunc(){
    store.dispatch(logout())
  }
  componentDidMount() {
   var element = ReactDOM.findDOMNode(this.refs.dropdown)
   $(element).ready(function() {
     $(".dropdown-button").dropdown();
   });
  }

  handleSearch(event){
    event.preventDefault()
    browserHistory.push(`/search/${event.target.search.value}`)
    var form = document.getElementById("search");
    form.reset();
  }
  render() {
    return (
    <div className="navbar-fixed">
    <ul id="dropdown1" className="dropdown-content">
      <li><Link to='/products/category/vegan' href="#!">Vegan</Link></li>
      <li><Link to='/products/category/cow'>Cow</Link></li>
      <li><Link to='/products/category/goat'>Goat</Link></li>
      <li><Link to='/products/category/buffalo'>Buffalo</Link></li>
      <li><Link to='/products/category/sheep'>Sheep</Link></li>
    </ul>
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <ul className="left hide-on-med-and-down">
          <li><a href="/" ><i className="material-icons">PARMAZON</i></a></li>
          <li><a href="/">Home</a></li>
          <li><Link to='/products'>All Products</Link></li>
          <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Categories<i className="material-icons right">arrow_drop_down</i></a></li>
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
        <li>
        <div className="nav-wrapper">

            <form id='search' onSubmit={this.handleSearch}>
              <div className="input-field">
               <input id="search" type="search" required/>
               <label htmlFor="search"><i className="material-icons">search</i></label>
               <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </li>
        <li><Link to='/signup/'>Sign Up</Link></li>
        <li><Link to='/login/'>Log In</Link></li>
        <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
      </div>
    )
  }

  renderSignedin() {
    console.log('LOG IN', this.props.user.isAdmin)
    var myAccountRoute = this.props.user.isAdmin ? '/myAccount' : `/myAccount/users/${this.props.user.id}`
    return (
      <div>
        <li>
        <div className="nav-wrapper">

            <form id='search' onSubmit={this.handleSearch}>
              <div className="input-field">
               <input id="search" type="search" required/>
               <label htmlFor="search"><i className="material-icons">search</i></label>
               <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </li>
        <li><Link to={myAccountRoute}>My Account</Link></li>
        <li onClick={this.logOutFunc}><Link to='/'>Logout</Link></li>
        <li><Link to='/cart'><i className="material-icons">shopping_cart</i></Link></li>
      </div>
    )
  }
}
