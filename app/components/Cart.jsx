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
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
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
      <button disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}


export default Cart