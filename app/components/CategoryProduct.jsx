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

            <div className="col s4">
             <Link to={`/products/${product.id}`}>
                            <div className="card">
                                <div className="view overlay hm-white-slight">
                                    <img src={product.imageURL} className="img-fluid" height='100' alt=""/>
                                    <a href="#">
                                        <div className="mask"></div>
                                    </a>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">{product.name}</h4>
                                    <p className="card-text">{product.description.slice(0, 175) + ((product.description.length > 175) ? '...' : '')}</p>
                                    <a href="#" className="btn btn-primary">Buy now for {`$ ${product.price} / Wheel`}</a>
                                </div>
                            </div>
                            </Link>
                        </div>
        )
      })

    return (
      <div className = 'row'>
      <h2> {this.props.params.cat.charAt(0).toUpperCase() + this.props.params.cat.slice(1)} Milk Cheeses! </h2>
        {productsList}
      </div>
    )
  }
}
