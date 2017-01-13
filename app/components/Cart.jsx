import React, { Component } from 'react';
import {Link} from 'react-router';


const Cart  = (props) => {
  let total = 0
  let hasProducts = props.products.length > 0
  const nodes = hasProducts ? (
    props.products.map(product => {
      total += (product.price*product.quantity)
      console.log(product)
      return (
      <div key={product.id}>
        <img src={product.imageURL} height='75'/>
        <div>name={product.name}</div>
        <div>price={product.price}</div>
        <div>quantity={product.quantity}</div>
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


export default Cart