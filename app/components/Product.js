import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import axios from 'axios';
import Reviews from './Reviews'
import Rating from 'react-rating-system';
import {fetchRatingforProduct} from '../reducers/actionCreators'
import store from '../store'

export default class Product extends Component {
  constructor(props) {
        super(props);
        this.state = {
          quantity: 1
        };
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleSubmitAddToCart = this.handleSubmitAddToCart.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }


  handleSubmitEdit(event){
    event.preventDefault()
    var form = document.getElementById("productEditForm");
    form.reset();
    axios.put(`/api/products/${this.props.product.id}`, this.state)
    .then();
  }

  handleDeleteButton(event){
    event.preventDefault();
    axios.delete(`/api/products/${this.props.product.id}`, this.state)
    .then();
     browserHistory.push('/products')
  }

  handleSubmitAddToCart(event){
    event.preventDefault()
    axios.post(`/api/orders/${this.props.cart.id}/products`, {name: this.props.product.name, price:this.props.product.price,quantity:this.state.quantity,imageURL:this.props.product.imageURL,ordered_product_id:this.props.product.id,order_id:this.props.cart.id,user_id:this.props.user.id})
    .then();
    browserHistory.push('/cart')

  }


  render() {
    let product = this.props.product || {};
    let x = this.props.rating.stars

    if(this.props.user.isAdmin){

      return (
        <div className='col s6'>
          <div className ='row'>
         <div className="col-lg-8">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="product-wrapper">

                                <div className="view overlay hm-white-light z-depth-1-half">
                                    <img src={product.imageURL} className="img-fluid " height='500'/>
                                    <div className="mask">
                                    </div>
                                    <h5 className="price"><span>{`$ ${product.price}`}</span></h5>
                                </div>

                                <br/>

                                <h2 className="h2-responsive">{product.name}</h2>
                                <hr/>
                                <div>{`${product.description}`}</div>
                                <div><h5>Rating: </h5><Rating image='https://raw.githubusercontent.com/enzoferey/react-rating-system/master/dist/star.png' fillBG="gold" initialBG="white" initialValue={this.props.rating.stars} editable={false} containerStyle={{ maxWidth: '200px' }}/></div><br/><br/>
                                <div><h5>Summary: </h5>{`${product.summary}`}</div>
                                <div><h5>Location: </h5>{`${product.location}`}</div>
                                <div><h5>Age: </h5>{`${product.age}`}</div>
                                <div><h5>Milk Type: </h5>{product.milkType}</div>
                            </div>

                        </div>
                        <br/>
                         <br/>
                         <div>Quantity</div>
                         <span className='row'><input value={this.state.quantity} onChange={e => this.setState({ quantity: e.target.value })} className='col s3' type='number'/></span>
                         <br/>
                         <button onClick={this.handleSubmitAddToCart} className='waves-effect waves-light btn-small'>Add To Cart</button>
                         <br/>
                         <br/>
                         <div className="reviews">
                            <h2 className="h2-responsive">Reviews</h2>
                             <Reviews user={this.props.user} reviews={this.props.reviews} product={this.props.product}/>
                        </div>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                        </div>
            Admin Edit
            </div>
            <button onClick={this.handleDeleteButton} className="btn">Delete Product</button>
            <div className="row">
              <form id='productEditForm' className="col s6" onSubmit={this.handleSubmitEdit}>
                <div className="row">
                  <div className="input-field col s12">
                    <label className="active" htmlFor="productName">Product Name</label>
                    <input id="productName" onChange={e => this.setState({ name: e.target.value })} type="text" className="validate" />
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
       <div className='col s6'>
          <div className ='row'>
         <div className="col-lg-8">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="product-wrapper">

                                <div className="view overlay hm-white-light z-depth-1-half">
                                    <img src={product.imageURL} className="img-fluid " height='500'/>
                                    <div className="mask">
                                    </div>
                                    <h5 className="price"><span>{`$ ${product.price}`}</span></h5>
                                </div>

                                <br/>

                                <h2 className="h2-responsive">{product.name}</h2>
                                <hr/>
                                <div>{`${product.description}`}</div>
                                <div><h5>Rating: </h5><Rating image='https://raw.githubusercontent.com/enzoferey/react-rating-system/master/dist/star.png' fillBG="gold" initialBG="white" initialValue={this.props.rating.stars} editable={false} containerStyle={{ maxWidth: '200px' }}/></div><br/><br/>
                                <div><h5>Summary: </h5>{`${product.summary}`}</div>
                                <div><h5>Location: </h5>{`${product.location}`}</div>
                                <div><h5>Age: </h5>{`${product.age}`}</div>
                                <div><h5>Milk Type: </h5>{product.milkType}</div>
                            </div>

                        </div>
                        <br/>
                         <br/>
                         <div>Quantity</div>
                         <span className='row'><input value={this.state.quantity} onChange={e => this.setState({ quantity: e.target.value })} className='col s3' type='number'/></span>
                         <br/>
                         <button onClick={this.handleSubmitAddToCart} className='waves-effect waves-light btn-small'>Add To Cart</button>
                         <br/>
                         <br/>
                         <div className="reviews">
                            <h2 className="h2-responsive">Reviews</h2>
                             <Reviews user={this.props.user} reviews={this.props.reviews} product={this.props.product}/>
                        </div>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                        </div>
                        </div>
                        </div>
                        </div>
        )

      }

  }
}
