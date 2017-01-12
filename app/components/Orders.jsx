import React, { Component } from 'react';

export default class Orders extends Component {
	constructor(props) {
        super(props);
        this.state = {
          allOrders: this.props.allOrders,
          userOrders: this.props.userOrders
        };
    }

    render(){

    	const arrOfOrders = this.props.allOrders.map(order => {
    		return(<a href="#!" key={order.id} className="collection-item secondary-item">{order.id}</a>)
    	})
    	// console.log('~~~~~~~~~~~~~~orders', this.props)


    	return (
    	  <div className="collection col s6">
    	  	<ul className="collection with-header">
    	  		<li className="collection-header"><h4>Orders</h4></li>
    	    	{arrOfOrders}
    	    </ul>
    	  </div>
    	)
    	
    }



}
