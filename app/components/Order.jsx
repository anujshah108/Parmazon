import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Order extends Component {
	constructor(props) {
        super(props);
        this.state = {
          singleOrder: this.props.singleOrder,
          products: this.props.products,
          user: this.props.user
        };
    }


    handleSubmitEdit(event){
    event.preventDefault()
    var form = document.getElementById("productEditForm");
    form.reset();
    axios.put(`/api/orders/${this.props.singleOrder.id}`, this.state)
    .then();
  }

  handleUpdateOrder(event){
    event.preventDefault();
    var orderStatusUpdate = document.getElementById('orderStatusUpdate').nodeValue();
    this.props.singleOrder.status = orderStatusUpdate;
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