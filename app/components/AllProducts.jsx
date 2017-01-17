import React, { Component } from 'react';
import {Link} from 'react-router'

export default class AllProducts extends Component {
  constructor(props){
    super(props)
  }




  render() {

    let products = this.props.products || [];
    let productsList = products.map(function(product){

      if(product.stockQuantity <= 0) return;

      return (

            <div className="col s4" key={product.id}>
             <Link to={`/products/${product.id}`}>
                            <div className="card">
                                <div className="view overlay hm-white-slight">
                                    <img src={product.imageURL} className="img-fluid" height='100' alt=""/>

                                        <div className="mask"></div>

                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">{product.name}</h4>
                                    <p className="card-text">{product.description.slice(0, 175) + ((product.description.length > 175) ? '...' : '')}</p>
                                    <button href="#" className="btn btn-primary">Buy now for {`$ ${product.price}`}</button>
                                </div>
                            </div>
                            </Link>
                        </div>
        )

      })

    if(this.props.user.isAdmin){
      return (
        <div className = 'row'>
         <h2> All Of The Cheeses </h2>
        <Link to={'/addProducts'} ><button className='btn'>Add new product</button></Link><br/>
          {productsList}
        </div>
      )

    }
    return (
      <div className = 'row'>
      <h2> All Of The Cheeses </h2>
        {productsList}
      </div>
    )
  }
}
