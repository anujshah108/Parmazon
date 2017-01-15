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
        Thank You For Your Purchase!
        <button> My Account </button>
        <button> HomePage </button>
      </div>
    )
  }
}

