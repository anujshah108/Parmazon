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
        <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="last_name" type="text" class="validate"/>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
                  <label for="disabled">Disabled</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate"/>
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="email" type="email" class="validate"/>
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  This is an inline input field:
                  <div class="input-field inline">
                    <input id="email" type="email" class="validate"/>
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
      </div> )
  }
}
