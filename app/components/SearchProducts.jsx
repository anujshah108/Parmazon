import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)
  }




  render() {

    let products = this.props.products || [];
    let term = this.props.params.term
    let productsList = products.filter(function(product){return product.milkType.match(new RegExp(term, "i"))||product.location.match(new RegExp(term, "i"))||(product.age+"")==term||product.name.match(new RegExp(term, "i"))}).map(function(product){


     return (

            <div className="col s4" key={product.id}>
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
                                    <a href="#" className="btn btn-primary">Buy now for {`$ ${product.price}`}</a>
                                </div>
                            </div>
                            </Link>
                        </div>
        )
      })

    return (
      <div className = 'row'>
      <div> Products By {this.props.params.term.charAt(0).toUpperCase() + this.props.params.term.slice(1)} </div>
        {productsList}
      </div>
    )
  }
}
