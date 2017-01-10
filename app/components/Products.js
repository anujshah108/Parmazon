import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let productsList = props.products.map(product =>
      return (
         <div className={productsProduct}>
            <Link to={`/product/${product.id}`}>
      <img className={productsImage} src={product.imageURL}/>
      <div className={productsName}>{product.name}</div>
      <div className={productsPrice}>Price: {`$ ${product.price}`}</div>
      <div className={productsRating}>Rating: {'★ '+ product.rating}</div>
          </Link>
    </div> )
      )
    return (
      <div>
        {productsList}
      </div>
    )
  }
}
