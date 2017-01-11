import React, { Component } from 'react';
import axios from 'axios';
export default class Products extends Component {
  constructor(props) {
        super(props);
        this.state = {
          name: this.props.product.name,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


  handleSubmit(event){
    event.preventDefault();
    axios.put(`/api/products/${this.props.product.id}`, { name: this.state.name}).resolve();
  }


  render() {
    let product = this.props.product || {};

    return (
      <div className='productProduct'>
        <img className='productImage' height="100" src={product.imageURL}/>
        <div className='productName'>{this.state.name || product.name}</div>
        <div className='productRating'>Rating: {'★ '+ this.props.rating.stars}</div>
        <div className='productPrice'>Price: {`$ ${product.price}`}</div>
        <div className='productStock'>Stock: {`${product.stockQuantity}`}</div>
        <div className='productDescription'>Description: {`${product.description}`}</div>
        <div className='productSummary'>Summary: {`${product.summary}`}</div>
        <div className='productLocation'>Location: {`${product.location}`}</div>
        <div className='productAge'>Age: {`${product.age}`}</div>
        <div className='productMilk'>Milk Type: {`${product.milkType}`}</div>
        <div className="row">
            <form className="col s6" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <label className="active" htmlFor="productName">Product Name</label>
                  <input id="productName" onChange={e => this.setState({ name: e.target.value })} type="text" className="validate"/>
                </div>
              </div>
                <div className="row">
                    <div className="input-field col s12">
                      <label className="active" htmlFor="productPrice">Price</label>
                      <input value="" id="productPrice" type="text" className="validate"/>
                    </div>
                </div>
              <div className="row">
                    <div className="input-field col s12">
                      <label className="active" htmlFor="productStock">Price</label>
                      <input value="" id="productStock" type="text" className="validate"/>
                    </div>
              </div>
              <button type="submit" className="btn btn-success">edit</button>
            </form>
          </div>
      </div> )
  }
}
