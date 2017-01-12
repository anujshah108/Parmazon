import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
  }




  render() {


      return (

      <form onSubmit={evt => {checkout(evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value, evt.target.password.value)} }>
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
                type="email"
                className="form-control"
                required
              />
            </div>
             <div className="form-group">
              <label>Address 2</label>
              <input
                name="address2"
                className="form-control"
                required
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
                name="email"
                type="number"
                className="form-control"
                required
              />
            </div>
            <input type="submit" value="Login" />
          </form>

    )

  }
}
