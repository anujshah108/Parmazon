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

    )
    }
    else{
      return (
       <div> Please Log In Or Sign Up To Continue! </div>
      )
    }
  }
}
