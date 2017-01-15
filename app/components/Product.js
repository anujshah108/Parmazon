import React, { Component } from 'react';
import axios from 'axios';
import Reviews from './Reviews'

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
          milkType: this.props.product.milkType,
          quantity: 1
        };

        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitAddToCart = this.handleSubmitAddToCart.bind(this);
    }


  handleSubmitEdit(event){
    event.preventDefault()
    var form = document.getElementById("productEditForm");
    form.reset();
    axios.put(`/api/products/${this.props.product.id}`, this.state)
    .then();
  }

  handleSubmitAddToCart(event){
    event.preventDefault()
    axios.post(`/api/orders/${this.props.cart.id}/products`, {name: this.props.product.name, price:this.props.product.price,quantity:this.state.quantity,imageURL:this.props.product.imageURL,ordered_product_id:this.props.product.id,order_id:this.props.cart.id,user_id:this.props.user.id})
    .then();
  }

  render() {
    let product = this.props.product || {};

    if(this.props.user.isAdmin){

      return (
        <div className='col s6'>
          <div className ='row'>
         <div className="col-lg-8">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="product-wrapper">

                                <div className="view overlay hm-white-light z-depth-1-half">
                                    <img src={this.state.imageURL || product.imageURL} className="img-fluid " height='500'/>
                                    <div className="mask">
                                    </div>
                                    <h5 className="price"><span>{`$ ${this.state.price || product.price}`}</span></h5>
                                </div>

                                <br/>

                                <h2 className="h2-responsive">{this.state.name || product.name}</h2>
                                <hr/>
                                <p>{`${this.state.description || product.description}`}</p>
                                <p><h5>Rating: </h5>{'★ ' + (this.state.rating || this.props.rating.stars)}</p>
                                <p><h5>Summary: </h5>{`${this.state.summary || product.summary}`}</p>
                                <p><h5>Location: </h5>{`${this.state.location || product.location}`}</p>
                                <p><h5>Age: </h5>{`${this.state.age || product.age}`}</p>
                                <p><h5>Milk Type: </h5>{`${this.state.milkType || product.milkType}`}</p>
                            </div>

                        </div>
                        <br/>
                         <br/>
                         <div>Quantity</div>
                         <span className='row'><input onChange={e => this.setState({ quantity: e.target.value })} className='col s3' type='number'/></span>
                         <br/>
                         <button onClick={this.handleSubmitAddToCart} className='waves-effect waves-light btn-small'>Add To Cart</button>
                         <br/>
                         <br/>
                         <div className="reviews">
                            <h2 className="h2-responsive">Reviews</h2>
                             <Reviews reviews={this.props.reviews}/>
                        </div>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                        </div>
            Admin Edit
            </div>
            <div className="row">
              <form id='productEditForm' className="col s6" onSubmit={this.handleSubmitEdit}>
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
           <br/>
            <br/>
            <div>Quantity</div>
            <span className='row'><input onChange={e => this.setState({ quantity: e.target.value })} className='col s3' type='number'/></span>
            <br/>
            <button onClick={this.handleSubmitAddToCart} className='waves-effect waves-light btn-small'>Add To Cart</button>
            <br/>
            <br/>
            <div> REVIEWS </div>
            <Reviews reviews={this.props.reviews}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        )

      }
  }
}
