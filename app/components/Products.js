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
