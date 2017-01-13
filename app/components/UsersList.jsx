import React, { Component } from 'react';
import {Link} from 'react-router';
export default class UsersList extends Component {
	constructor(props) {
        super(props);
        this.state = {
          allUsers: this.props.allUsers,
          currentUser: this.props.currentUser
        };
    }

    render(){

    	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    	const arrOfUsers = this.props.allUsers.map(user => {
    		// let dateToFormat = new Date(order.created_at);
    		// if(order.status === 'cart') return;
    		const fullName = user.firstName + ' ' + user.lastName;
    		return(
	    			<tr className="collection " key={user.id}>		
			            <td>{user.id}</td>
			            <td>{fullName}</td>
			            <td>{user.email}</td>
			            <td><Link to={`/myAccount/users/${user.id}`}><i className="material-icons">trending_flat</i></Link></td>
			        </tr>
			    
		        
    		)
    	})
    	  console.log('~~~~~~~~~~~~~~USERS', this.props)

    	return (
    		<div>
	  	    	<table className="highlight">
	  		        <thead>
	  			        <tr>
	  			            <th data-field="id">User ID</th>
	  			            <th data-field="name">Name</th>
	  			            <th data-field="price">Email</th>
	  			            <th data-field="link">View</th>
	  			        </tr>
	  		        </thead>
	  		        <tbody>
	  		       		{arrOfUsers}
	  		    	</tbody>
	  		    </table>
    	    </div>
    	)
    	
    }

}
