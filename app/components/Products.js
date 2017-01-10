import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
    // console.log("~~~~~~", this.props.products)
    let products = this.props.products || [];
    let productsList = products.map(function(product){


      return (
         <div className='productsProduct' key={product.id}>
            <Link to={`/product/${product.id}`}>
            <img className='productsImage' height="100" src={product.imageURL}/>
            <div className='productsName'>{product.name}</div>
            <div className='productsPrice'>Price: {`$ ${product.price}`}</div>
            <div className='productsRating'>Rating: {'★ '+ product.rating}</div>
          </Link>
        </div> )
      })
    return (
      <div>
        {productsList}
      </div>
    )
  }
}
