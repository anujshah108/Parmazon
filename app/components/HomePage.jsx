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
        $('.slider').slider({full_width: true, height: 600, interval: 1500});
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
                     <img src="http://www.eatwisconsincheese.com/EatWisconsinCheese/media/content/hero%20images/hero-cheese.png"/>
                     <div className="caption center-align">
                     </div>
                   </li>
                   <li>
                     <img src="https://cdn.suwalls.com/wallpapers/photography/cheese-31926-2560x1600.jpg"/>
                     <div className="caption left-align">
                     </div>
                   </li>
                   <li>
                     <img src="https://amycrawleyphotography.files.wordpress.com/2013/05/img_0049.jpg"/>
                     <div className="caption right-align">
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

