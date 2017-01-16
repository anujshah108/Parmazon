import React, { Component } from 'react';
import {Link} from 'react-router';
import UserOrders from './UserOrders';
import axios from 'axios';

export default class MyAccount extends Component {
	constructor(props) {
        super(props);
        this.state = {
          user: this.props.currentUser,
          orders: this.props.userOrders,
          allOrders: this.props.allOrders
        };
    }

    handlePromoteToAdmin(event){
      event.preventDefault();

    }


    render(){
    	console.log('~~~!@!@~@~!@~!@~@~props for single user', this.props);
  		
    	  return (
    	    <div className='productProduct'>
    	
    	      <div id='productName' className='productName'>{this.props.currentUser.firstName}</div>
              <div id='productName' className='productName'>{this.props.currentUser.lastName}</div>
              {<UserOrders userOrders={this.props.userOrders} user={this.props.currentUser} allOrders={this.props.allOrders}/>}
              {/**<OrdersContainer />**/}
    	      
    	    </div>
    	    )
    }

}