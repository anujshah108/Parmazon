import React, { Component } from 'react';
import NavBar from './NavBar';
import Products from '../containers/ProductsContainer'
import axios from 'axios';

export default class HomePage extends Component {

  constructor(props) {
        super(props);

    }

  render() {
    return (
      <div>
        <NavBar/>
        <Products products={this.props.products}/>
      </div>
    )
  }
}

