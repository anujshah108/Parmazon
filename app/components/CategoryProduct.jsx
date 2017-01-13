import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
  }




  render() {

    let products = this.props.products || [];
    let productsList = products.filter(product=>product.milkType==this.props.params.cat).map(function(product){


      return (
         <div className='productsProduct col s4' key={product.id}>
            <Link to={`/products/${product.id}`}>
            <img className='productsImage' height="100" src={product.imageURL}/>
            <div className='productsName'>{product.name}</div>
            <div className='productsPrice'>Price: {`$ ${product.price}`}</div>
            <div className='productsRating'>Rating: {'★ '+ product.rating}</div>
             </Link>
        </div> )


      })

    return (
      <div className = 'row'>
      <div> Products By {this.props.params.cat} </div>
        {productsList}
      </div>
    )
  }
}
