import React, { Component } from 'react';
import axios from 'axios';
export default class Products extends Component {
  constructor(props) {
        super(props);
    }

  render() {
    let product = this.props.product || {};
    console.log('~~~~~~~~~~~This is a Rating:',this.props.rating.stars)


  



    

    return (
      <div className='productProduct'>
        <img className='productImage' height="100" src={product.imageURL}/>
        <div className='productName'>{product.name}</div>
        <div className='productRating'>Rating: {'★ '+ this.props.rating.stars}</div>
        <div className='productPrice'>Price: {`$ ${product.price}`}</div>
        <div className='productStock'>Stock: {`${product.stockQuantity}`}</div>
        <div className='productDescription'>Description: {`${product.description}`}</div>
        <div className='productSummary'>Summary: {`${product.summary}`}</div>
        <div className='productLocation'>Location: {`${product.location}`}</div>
        <div className='productAge'>Age: {`${product.age}`}</div>
        <div className='productMilk'>Milk Type: {`${product.milkType}`}</div>
        <div className="row">
            <form className="col s6">
              <div className="row">
                <div className="input-field col s12">
                  <label className="active" for="productName">Product Name</label>
                  <input value={product.name} id="productName" type="text" className="validate"/>
                </div>
              </div>
                <div className="row">
                    <div className="input-field col s12">
                      <label className="active" for="productPrice">Price</label>
                      <input value={product.price} id="productPrice" type="text" className="validate"/>
                    </div>
                </div>
      
              <div className="row">
                    <div className="input-field col s12">
                      <label className="active" for="productStock">Price</label>
                      <input value={product.stockQuantity} id="productStock" type="text" className="validate"/>
                    </div>
              </div>
            </form>
          </div>
      </div> )
  }
}
