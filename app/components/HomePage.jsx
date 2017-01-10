import React, { Component } from 'react';
import NavBar from './NavBar';
import Products from './Products'
import axios from 'axios';

export default class HomePage extends Component {

  constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
       axios.get('api/products')
      .then(res => res.data)
      .then(products => {
        this.setState({products});
        console.log(products);
      })
      .catch(err => {
        console.error(err);
      })
    }

  render() {  
    return (
      <div>
        <NavBar/>
        <Products products={this.state.products}/>
      </div>
    )
  }
}

  