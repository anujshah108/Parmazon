import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export default class Order extends Component {
	constructor(props) {
        super(props);
        this.state = {
          singleOrder: this.props.singleOrder,
          products: this.props.products,
          user: this.props.user
        };
        this.handleUpdateOrder = this.handleUpdateOrder.bind(this);
        this.handleDeleteOrder = this.handleDeleteOrder.bind(this);
    }


    handleSubmitEdit(event){
    event.preventDefault()
    var form = document.getElementById("productEditForm");
    form.reset();
    axios.put(`/api/orders/${this.props.singleOrder.id}`, this.state)
    .then();
  }

  handleDeleteOrder(event){
    event.preventDefault()
    axios.delete(`/api/orders/${this.props.singleOrder.id}`).then();
  }

  handleUpdateOrder(event){
    event.preventDefault();
    var orderStatusUpdate = document.getElementById('orderStatusUpdate').value;
    this.props.singleOrder.status = orderStatusUpdate;
    alert(orderStatusUpdate);
    axios.put(`/api/orders/${this.props.singleOrder.id}`, this.props.singleOrder).then();
  }

    render(){


        let total = 0
        let hasProducts = this.props.products.length > 0
        const nodes = hasProducts ? (
          this.props.products.map(product => {
            total += (product.price * product.quantity)
            console.log(product)
            return (
            <div key={product.id}>
              <img src={product.imageURL} height='75'/>
              <div>name={product.name}</div>
              <div>price={product.price}</div>
              <div>quantity={product.quantity}</div>
              <Link to={`/products/${product.id}`}>product link</Link>
            </div> )
         } )
        ) : (
          <em>Please add some products to cart.</em>
        )
	
        if(this.props.user.isAdmin){
            return (
                        <div className='productProduct'>
                     
                            <div>
                                <h3>Your Order</h3>
                                <div>{nodes}</div>
                                <p>Total: {total}</p>
                            </div>
                            <input placeholder={this.props.singleOrder.status} id="orderStatusUpdate" type="text" className="validate"></input>
                            <button onClick={this.handleUpdateOrder}className='btn'> Update</button>
                            <button onClick={this.handleDeleteOrder} className='btn warning'> Delete</button>
                        </div>

                )
        }

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