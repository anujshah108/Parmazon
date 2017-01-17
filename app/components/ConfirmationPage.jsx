import React, { Component } from 'react';
import NavBar from '../containers/NavBarContainer';
import Products from '../containers/ProductsContainer'
import axios from 'axios';

export default class HomePage extends Component {

  constructor(props) {
        super(props);

    }

  render() {
    return (

      <div>
      <div class="wrapper">

      <div id="content">

      <h1>Parmazon Appreciates Your Order</h1>

      <hr />

      <p class="date">{Date()}</p>

      <hr />



      <p>Thank you so much for your purchase.</p>

     <p>We are incredicbly lucky to have you as a customer!</p>

    <p>Best wishes,</p>

    <p class="signature">Parmazon</p>


    </div>

  </div>

        <button> My Account </button>
        <button> HomePage </button>
      </div>
    )
  }
}

