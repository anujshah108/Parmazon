import React, { Component } from 'react';
import Products from './Products';

export default class ProductManagement extends Component {
  constructor(props) {
        super(props);

    }

  render() {
    return (
      <div className='prodManagementPanel'>
        <Products products={this.props.products} />
        <h1> hello </h1>     
      </div> 
      )
  }
}