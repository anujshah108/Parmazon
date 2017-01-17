import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
  }




  render() {

    let products = this.props.products || [];
    let productsList = products.filter(product => product.stockQuantity > 0).map(function(product){


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
    return (
      <div className = 'row'>
        {productsList}
      </div>
    )
  }
}
