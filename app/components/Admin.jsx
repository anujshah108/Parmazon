import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Admin extends Component {
  constructor(props) {
        super(props);

    }

  render() {
    return (
      <div className='adminPanel'>
        <Link to='/myAccount/orders' className="waves-effect waves-light btn" >All Orders</Link>
        <Link to='/myAccount/users' className="waves-effect waves-light btn" >All Users</Link>
        <Link to='/products' className="waves-effect waves-light btn" >All Products</Link>
      </div> )
  }
}


