import React, { Component } from 'react';
import {Link} from 'react-router';
import UserOrders from './UserOrders';
import axios from 'axios';

export default class MyAccount extends Component {
	constructor(props) {
        super(props);
        this.state = {
          singleUser: this.props.singleUser,
          user: this.props.currentUser,
          orders: this.props.userOrders,
          allOrders: this.props.allOrders
        };
        this.handleEditEmail = this.handleEditEmail.bind(this);
        this.handleUpgradeToAdmin = this.handleUpgradeToAdmin.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleEditEmail(event){
      event.preventDefault();
      var emailValue = document.getElementById('emailEdit').value;
      axios.put(`/api/users/${this.props.singleUser.id}`, {email: emailValue}).then();
    }

    handleUpgradeToAdmin(event){
      event.preventDefault();
      axios.put(`/api/users/${this.props.singleUser.id}`, {isAdmin: true}).then();
    }

    handleDeleteUser(event){
      event.preventDefault();
      axios.delete(`/api/users/${this.props.singleUser.id}`, {}).then();
    }



    render(){

      if(this.props.currentUser.isAdmin){
        return (

                <div className='productProduct'>

                  <h3 id='productName' className='productName'>{this.props.singleUser.firstName}</h3>
                    <h3 id='productName' className='productName'>{this.props.singleUser.lastName}</h3>
                    <div>
                      <div className="input-field col s12">
                        <label className="active" htmlFor="productImage">Email</label>
                        <input id="emailEdit" name="emailEdit" type="text" className="validate" placeholder={this.props.singleUser.email}/>
                        <button onClick={this.handleEditEmail}className='btn'>Edit Email</button>
                      </div>
                      <button onClick={this.handleUpgradeToAdmin}className='btn'>Upgrade to Admin</button>
                      <button onClick={this.handleDeleteUser}className='btn'>Delete User</button>
                    {<UserOrders userOrders={this.props.userOrders} user={this.props.currentUser} singleUser={this.props.singleUser} allOrders={this.props.allOrders}/>}

                    {/**<OrdersContainer />**/}

                </div>
                </div>
          )
      }

    	  return (
    	    <div className='productProduct'>

    	      <div id='productName' className='productName'>{this.props.singleUser.firstName}</div>
              <div id='productName' className='productName'>{this.props.singleUser.lastName}</div>
              <div>
                <div className="input-field col s12">
                  <label className="active" htmlFor="productImage">Email</label>
                  <input id="emailEdit" name="emailEdit" type="text" className="validate" placeholder={this.props.singleUser.email}/>
                  <button onClick={this.handleEditEmail}className='btn'>Edit Email</button>
                </div>
              <UserOrders userOrders={this.props.userOrders} user={this.props.currentUser} singleUser={this.props.singleUser} allOrders={this.props.allOrders}/>

    	    </div>
          </div>

    	    )

      }
    }