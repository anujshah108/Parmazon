import React, { Component } from 'react';
import axios from 'axios';
export default class Products extends Component {
  constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    componentDidMount(){
       axios.get('/api/products/1')
      .then(res => res.data)
      .then(product => {
        this.setState({product});
        console.log('~~~~~~',product);
      })
      .catch(err => {
        console.error(err);
      })
    }
  render() {
    let product = this.state.product || {};

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
