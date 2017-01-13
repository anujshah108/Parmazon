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
    	console.log('~~~!@!@~@~!@~!@~@~props for single order', this.props.products);
  		
    	  return (
    	    <div className='productProduct'>
    	
    	      <div id='productName' className='productName'>hello</div>
    	      
    	    </div>
    	    )

    	  
    }

}