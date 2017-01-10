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
            <Link to={`/product/${props.product.id}`}>
      <img className={productsImage} src='${props.product.thumb}'/>
      <div className={productsName}>{props.product.name}</div>
      <div className={productsPrice}>Rs. {`$ ${props.product.price}`}</div>
      <div className={productsRating}>{'★ '+props.product.rating}</div>
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
