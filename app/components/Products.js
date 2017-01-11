import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Products extends Component {
  constructor(props){
    super(props)

  }
  render() {
    
    let products = this.props.products || [];
    let productsList = products.map(function(product){


      return (
         <div className='productsProduct col s4' key={product.id}>
            <Link to={`/products/${product.id}`}>
            <img className='productsImage' height="100" src={product.imageURL}/>
            <div className='productsName'>{product.name}</div>
            <div className='productsPrice'>Price: {`$ ${product.price}`}</div>
            <div className='productsRating'>Rating: {'★ '+ product.rating}</div>
          </Link>
        </div> )

        {/**return(
          <div className='productsProduct col s4' key={product.id}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" height="100" src={product.imageURL}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{product.name}</span>
                <p>
                  <button class="btn waves-effect waves-light" type="submit" name="action">ADD<i className="material-icons right">add</i></button>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          )**/}

      })
    return (
      <div className = 'row'>
        {productsList}
      </div>
    )
  }
}
