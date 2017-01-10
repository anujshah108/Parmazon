import React, { Component } from 'react';
import axios from 'axios';
export default class Products extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    let product = this.props.product || {};

    return (
      <div className='productProduct'>
        <img className='productImage' height="100" src={product.imageURL}/>
        <div className='productName'>{product.name}</div>
        <div className='productRating'>Rating: {'★ '+ product.rating}</div>
        <div className='productPrice'>Price: {`$ ${product.price}`}</div>
        <div className='productStock'>Stock: {`${product.stockQuantity}`}</div>
        <div className='productDescription'>Description: {`${product.description}`}</div>
        <div className='productSummary'>Summary: {`${product.summary}`}</div>
        <div className='productLocation'>Location: {`${product.location}`}</div>
        <div className='productAge'>Age: {`${product.age}`}</div>
        <div className='productMilk'>Milk Type: {`${product.milkType}`}</div>
      </div> )
  }
}
