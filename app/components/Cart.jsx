import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios'
import {Router} from 'react-router'
import {fetchProductsForCart, deleteCartItem} from '../reducers/actionCreators'
import store from '../store'


export default class Cart extends Component {
  constructor(props) {
        super(props);
        this.handleOnClickDelete = this.handleOnClickDelete.bind(this)
      }

    handleOnClickDelete(id){
        //optmistic rendering
       store.dispatch(deleteCartItem(id))
       axios.delete(`/api/orders/${this.props.cart.id}/products/${id}`, {})
       this.setState({})
    }

  render(){
  let total = 0
  let hasProducts = this.props.products.length > 0
  const nodes = hasProducts ? (
    this.props.products.map(product => {
      total += (product.price*product.quantity)
      return (

          <tr className="collection " key={product.id}>
                <td><img height='50' src={product.imageURL}/></td>
                <td>{product.name}</td>
                <td>{`$ ${product.price}`}</td>
                <td>{product.quantity}</td>
                <td><Link to={`/products/${product.ordered_product_id}`}><i className="material-icons">trending_flat</i></Link></td>
                <td><button onClick={() => this.handleOnClickDelete(product.id)}>Delete</button></td>
          </tr>
          )
        } )
  ) : (
    <tr>
    <td>Please add some products to cart.</td>
    </tr>
  )

  return (
    <div>
      <h3>Your Cart</h3>
            <table className="highlight">
                <thead>
                  <tr>
                      <th data-field="productImg"></th>
                      <th data-field="name">Product Name</th>
                      <th data-field="price">Price</th>
                      <th data-field="quantity">Quantiity</th>
                      <th data-field="link">View</th>
                      <th data-field="delete">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {nodes}
              </tbody>
            </table>




      <p>Total: {`$ ${total.toFixed(2)}`}</p>
      <Link to='/checkout'><button disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button></Link>

    </div>
  )
}
}


