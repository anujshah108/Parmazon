import React, { Component } from 'react';
import {Link} from 'react-router'
import axios from 'axios'

export default class Products extends Component {
  constructor(props){
    super(props)
    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this)
  }

  handleCheckoutSubmit(event){
      let orderid = this.props.cart.id
      event.preventDefault()
      axios.post(`/api/orders/checkout/address`, {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address1: event.target.address1.value,
      address2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      phone: event.target.phone.value,
      zip: event.target.zip.value,
      email: event.target.email.value,
      user_id: this.props.user.id
    }).then(function (response) {
      axios.put(`/api/orders/${orderid}`, {
        status: 'completed',
        address_id: response.data.id
      })
  })
    browserHistory.push('/confirmation')

  }




  render() {
    if(this.props.user.id){
      return (
<div>
<div class="container">
  <div class="row-fluid">
      <form class="form-horizontal">
        <fieldset>
          <div id="legend">
            <legend class=""><h2>Payment</h2></legend>
          </div>


          <div class="control-group">
            <label class="control-label"  for="username">Card Holder's Name</label>
            <div class="controls">
              <input type="text" id="username" name="username" placeholder="" class="input-xlarge"/>
            </div>
          </div>


          <div class="control-group">
            <label class="control-label" for="email">Card Number</label>
            <div class="controls">
              <input type="text" id="email" name="email" placeholder="" class="input-xlarge"/>
            </div>
          </div>


          <div class="control-group">
            <label class="control-label" for="password">Card Expiry Date</label>
            <div class="controls">
              <select class="span3" name="expiry_month" id="expiry_month">
                <option></option>
                <option value="01">Jan (01)</option>
                <option value="02">Feb (02)</option>
                <option value="03">Mar (03)</option>
                <option value="04">Apr (04)</option>
                <option value="05">May (05)</option>
                <option value="06">June (06)</option>
                <option value="07">July (07)</option>
                <option value="08">Aug (08)</option>
                <option value="09">Sep (09)</option>
                <option value="10">Oct (10)</option>1
                <option value="11">Nov (11)</option>
                <option value="12">Dec (12)</option>
              </select>
              <select class="span2" name="expiry_year">
                <option value="13">2013</option>
                <option value="14">2014</option>
                <option value="15">2015</option>
                <option value="16">2016</option>
                <option value="17">2017</option>
                <option value="18">2018</option>
                <option value="19">2019</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
              </select>
            </div>
          </div>


          <div class="control-group">
            <label class="control-label"  for="password_confirm">Card CVV</label>
            <div class="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="span2"/>
            </div>
          </div>

        </fieldset>
      </form>
    </div>
</div>
<h2> Only One Step Away From All The Cheese!! </h2>
<h4> Checkout Below </h4>
<br/>
<br/>
      <form onSubmit={this.handleCheckoutSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                className="form-control"
                type="email"
                required
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                name="address1"
                className="form-control"
                required
              />
            </div>
             <div className="form-group">
              <label>Address 2</label>
              <input
                name="address2"
                className="form-control"
              />
            </div>
             <div className="form-group">
              <label>City</label>
              <input
                name="city"
                className="form-control"
                required
              />
            </div>
             <div className="form-group">
              <label>State</label>
              <input
                name="state"
                className="form-control"
                required
              />
            </div>
             <div className="form-group">
              <label>Phone Number</label>
              <input
                name="phone"
                className="form-control"
                required
              />
            </div>
             <div className="form-group">
              <label>Zip</label>
              <input
                name="zip"
                type="number"
                className="form-control"
                required
              />
            </div>
            <input type="submit" value="Complete Checkout" />
          </form>
</div>
    )
    }
    else{
      return (
       <h1> Please Log In Or Sign Up To Continue! </h1>
      )
    }
  }
}
