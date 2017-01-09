import React, { Component } from 'react';

export default class NavBar extends Component {

	render() {  
    return (
    <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <a href="#!" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li>
          	<form>
          		<div className="input-field">
          			<input id="search" type="search" required/>
          			<label htmlFor="search"><i className="material-icons">search</i></label>
          			<i className="material-icons">close</i>
          		</div>
          	</form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    )
  }
}