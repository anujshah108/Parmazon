import React, { Component } from 'react';
import {Link} from 'react-router';

export default class MyAccount extends Component {
	constructor(props) {
        super(props);
        this.state = {
          singleOrder: this.props.singleOrder,
          products: this.props.products
        };
    }


    render(){
    	console.log('~~~!@!@~@~!@~!@~@~props for single user', this.props);
  		
    	  return (
    	    <div className='productProduct'>
    	
    	      <div id='productName' className='productName'>hello</div>
    	      
    	    </div>
    	    )

    	  
    }

}