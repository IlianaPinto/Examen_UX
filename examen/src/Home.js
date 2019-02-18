import React, { Component } from 'react';
import {base} from './base.json';
import Carousel from './Carousel';
import Carouselp from './Carousep';
import './App.css';
import producto from './producto.jpeg'

class Home extends Component{
    constructor(props){
      super(props)
      this.state = { base }

    }

  render() { 
    return ( 
      <div>   
        <Carouselp></Carouselp>  
        <nav><h1>NEW ARRIVALS</h1></nav>
        <Carousel></Carousel>
        
      </div>

    );
  }
}

export default Home;