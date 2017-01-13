import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Order extends Component {
	constructor(props) {
        super(props);
        this.state = {
          singleOrder: this.props.singleOrder,
          products: this.props.products
        };
    }


    render(){
    	


        let total = 0
        let hasProducts = this.props.products.length > 0
        const nodes = hasProducts ? (
          this.props.products.map(product => {
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
    	    <div className='productProduct'>
    	
    	      <div>
                <h3>Your Order</h3>
                <div>{nodes}</div>
                <p>Total: {total}</p>
              </div>
    	      
    	    </div>
    	    )

    	  
    }

}