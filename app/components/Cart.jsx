import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios'
import {Router} from 'react-router'



export default class Cart extends Component {
  constructor(props) {
        super(props);
        this.handleOnClickDelete = this.handleOnClickDelete.bind(this)
      }

    handleOnClickDelete(id){
       axios.delete(`/api/orders/${this.props.cart.id}/products/${id}`)
    .then();
    }

  render(){
  let total = 0
  let hasProducts = this.props.products.length > 0
  const nodes = hasProducts ? (
    this.props.products.map(product => {
      total += (product.price*product.quantity)
      return (
      <div key={product.id}>
        <img src={product.imageURL} height='75'/>
        <div>name={product.name}</div>
        <div>price={product.price}</div>
        <div>quantity={product.quantity}</div>
        <button onClick={() => this.handleOnClickDelete(product.id)}>Delete</button>
      </div> )
   } )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: {total}</p>
      <Link to='/checkout'><button disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button></Link>
    </div>
  )
}
}


