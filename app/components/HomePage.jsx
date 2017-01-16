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
                     <img src="http://cdn.wall-pix.net/cache/art-photography/39/39e85122d3f545ef5cc05aba2f73bb62dad0ebb0.jpg"/>
                     <div className="caption center-align">
                       <h3>Welcome To Parmazon!</h3>
                     </div>
                   </li>
                   <li>
                     <img src="https://cdn.suwalls.com/wallpapers/photography/cheese-31926-2560x1600.jpg"/>
                     <div className="caption left-align">
                       <h3>We Love Cheese!</h3>
                       <h5 className="light grey-text text-lighten-3">Shop Now!</h5>
                     </div>
                   </li>
                   <li>
                     <img src="https://amycrawleyphotography.files.wordpress.com/2013/05/img_0049.jpg"/>
                     <div className="caption right-align">
                       <h3>Best Cheese In The World!</h3>
                       <h5 className="light grey-text text-lighten-3">Great For Gifts!</h5>
                     </div>
                   </li>
                   <li>
                     <img src="http://www.andypost.com/media/original/Andy-Post-Food-Photography-Grilled-Cheese.jpg"/>
                     <div className="caption center-align">
                     </div>
                   </li>
                 </ul>
               </div>

        <Products/>
      </div>
    )
  }
}

