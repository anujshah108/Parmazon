import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Orders extends Component {
	constructor(props) {
        super(props);
        this.state = {
          allOrders: this.props.allOrders,
          userOrders: this.props.userOrders,
          user: this.props.user
        };
    }

    render(){


        const arrToMap = this.props.user.isAdmin ? this.props.allOrders : this.props.userOrders;


            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        
        	const arrOfOrders = arrToMap.map(order => {
        		let dateToFormat = new Date(order.created_at);
        		if(order.status === 'cart') return;

        		return(
    	    			<tr className="collection " key={order.id}>		
    			            <td>{order.id}</td>
    			            <td>{dateToFormat.toLocaleDateString("en-US")}</td>
    			            <td>{order.status}</td>
    			            <td><Link to={`/myAccount/orders/${order.id}`}><i className="material-icons">trending_flat</i></Link></td>
    			        </tr>   
        		)
        	})
        	 // console.log('~~~~~~~~~~~~~~orders', this.props.allOrders)

        	return (
        		<div>
    	  	    	<table className="highlight">
    	  		        <thead>
    	  			        <tr>
    	  			            <th data-field="id">Order ID</th>
    	  			            <th data-field="name">Order Date</th>
    	  			            <th data-field="price">Order Status</th>
    	  			            <th data-field="link">View</th>
    	  			        </tr>
    	  		        </thead>
    	  		        <tbody>
    	  		       		{arrOfOrders}
    	  		    	</tbody>
    	  		    </table>
        	    </div>
        	)
        	

    }


}
