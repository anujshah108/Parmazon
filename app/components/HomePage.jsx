import React, { Component } from 'react';
import NavBar from '../containers/NavBarContainer';
import Products from '../containers/ProductsContainer'
import axios from 'axios';
import ReactDOM from 'react-dom'

export default class HomePage extends Component {

  constructor(props) {
        super(props);

    }
      componentDidMount() {
        $('.slider').slider({full_width: true, height: 600});

// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');



  }

  render() {
    return (
      <div>

             <div className="slider">
                 <ul className="slides">
                   <li>
                     <img src="http://lorempixel.com/580/250/nature/1"/>
                     <div className="caption center-align">
                       <h3>This is our big Tagline!</h3>
                       <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                     </div>
                   </li>
                   <li>
                     <img src="http://lorempixel.com/580/250/nature/2"/>
                     <div className="caption left-align">
                       <h3>Left Aligned Caption</h3>
                       <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                     </div>
                   </li>
                   <li>
                     <img src="http://lorempixel.com/580/250/nature/3"/>
                     <div className="caption right-align">
                       <h3>Right Aligned Caption</h3>
                       <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                     </div>
                   </li>
                   <li>
                     <img src="http://lorempixel.com/580/250/nature/4"/>
                     <div className="caption center-align">
                       <h3>This is our big Tagline!</h3>
                       <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                     </div>
                   </li>
                 </ul>
               </div>

        <Products/>
      </div>
    )
  }
}

