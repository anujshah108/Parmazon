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
            return (
              <tr className="collection " key={product.id}>
                    <td><img height='50' src={product.imageURL}/></td>
                    <td>{product.name}</td>
                    <td>{`$ ${product.price}`}</td>
                    <td>{product.quantity}</td>
                    <td><Link to={`/products/${product.id}`}><i className="material-icons">trending_flat</i></Link></td>
              </tr>
                   )
         } )
        ) : (
          <em>Please add some products to cart.</em>
        )

        if(this.props.user.isAdmin){
            return (


                        <div className='productProduct'>

                            <div>
                                <h3>Your Order</h3>
                                <table className="highlight">
                                    <thead>
                                      <tr>
                                          <th data-field="productImg"></th>
                                          <th data-field="name">Product Name</th>
                                          <th data-field="price">Price</th>
                                          <th data-field="quantity">Quantiity</th>
                                          <th data-field="link">View</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {nodes}
                                  </tbody>
                                </table>
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
                <table className="highlight">
                                <thead>
                                  <tr>
                                      <th data-field="productImg"></th>
                                      <th data-field="name">Order Date</th>
                                      <th data-field="price">Order Status</th>
                                      <th data-field="quantity">Quantiity</th>
                                      <th data-field="link">View</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {nodes}
                              </tbody>
                            </table>
                <p>Total: {total}</p>
              </div>

    	    </div>
    	    )
    }

}