import React, { Component } from 'react';
import axios from 'axios';
export default class Product extends Component {
  constructor(props) {
        super(props);
        this.state = {
          name: this.props.product.name,
          imageURL: this.props.product.imageURL,
          rating: this.props.rating.stars,
          price: this.props.product.price,
          stockQuantity: this.props.product.stock,
          description: this.props.product.description,
          summary: this.props.product.summary,
          location: this.props.product.location,
          age: this.props.product.age,
          milkType: this.props.product.milkType
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


  handleSubmit(event){
    event.preventDefault()
    var form = document.getElementById("productEditForm");
    form.reset();
    axios.put(`/api/products/${this.props.product.id}`, this.state)
    .then();
  }


  render() {
    let product = this.props.product || {};
    if(this.props.user.isAdmin){
      return (
        <div className='col s6'>
          <div className='productProduct col s12'>
            <img className='productImage' height="100" src={this.state.imageURL || product.imageURL}/>
            <div id='productName' className='productName'>{this.state.name || product.name}</div>
            <div className='productRating'>Rating: {'★ ' + (this.state.rating || this.props.rating.stars)}</div>
            <div className='productPrice'>Price: {`$ ${this.state.price || product.price}`}</div>
            <div className='productStock'>Stock: {`${this.state.stockQuantity || product.stockQuantity}`}</div>
            <div className='productDescription'>Description: {`${this.state.description || product.description}`}</div>
            <div className='productSummary'>Summary: {`${this.state.summary || product.summary}`}</div>
            <div className='productLocation'>Location: {`${this.state.location || product.location}`}</div>
            <div className='productAge'>Age: {`${this.state.age || product.age}`}</div>
            <div className='productMilk'>Milk Type: {`${this.state.milkType || product.milkType}`}</div>
            <input className='col s3' type='number'/><button className='waves-effect waves-light btn-small'>Add To Cart</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            Admin Edit
            </div>
            <div className="row">
              <form id='productEditForm' className="col s6" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productName">Product Name</label>
                    <input id="productName" onChange={e => this.setState({ name: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productImage">Product Image</label>
                    <input id="productImage" onChange={e => this.setState({ imageURL: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                      <label className="active" htmlFor="productPrice">Price</label>
                      <input id="productPrice" type="text" onChange={e => this.setState({ price: e.target.value })} className="validate"/>
                    </div>
                </div>
                <div className="row">
                      <div className="input-field col s12">
                        <label className="active" htmlFor="productStock">Stock</label>
                        <input id="productStock" type="text" onChange={e => this.setState({ stockQuantity: e.target.value })} className="validate"/>
                      </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productDescription">Description</label>
                    <input id="productDescription" onChange={e => this.setState({ description: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productSummary">Summary</label>
                    <input id="productSummary" onChange={e => this.setState({ summary: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productName">Location</label>
                    <input id="productLocation" onChange={e => this.setState({ location: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productName"> Age</label>
                    <input id="productAge" onChange={e => this.setState({ age: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productName">Milk Type</label>
                    <input id="productMilkType" onChange={e => this.setState({ milkType: e.target.value })} type="text" className="validate"/>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">edit</button>
              </form>
            </div>
          </div>
      </div> )
    }
    else {
      return (
        <div className='productProduct'>
          <img className='productImage' height="100" src={this.state.imageURL || product.imageURL}/>
          <div id='productName' className='productName'>{this.state.name || product.name}</div>
          <div className='productRating'>Rating: {'★ ' + (this.state.rating || this.props.rating.stars)}</div>
          <div className='productPrice'>Price: {`$ ${this.state.price || product.price}`}</div>
          <div className='productStock'>Stock: {`${this.state.stockQuantity || product.stockQuantity}`}</div>
          <div className='productDescription'>Description: {`${this.state.description || product.description}`}</div>
          <div className='productSummary'>Summary: {`${this.state.summary || product.summary}`}</div>
          <div className='productLocation'>Location: {`${this.state.location || product.location}`}</div>
          <div className='productAge'>Age: {`${this.state.age || product.age}`}</div>
          <div className='productMilk'>Milk Type: {`${this.state.milkType || product.milkType}`}</div>
        </div>
        )

      }
  }
}
