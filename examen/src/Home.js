import React, { Component } from 'react';
import {base} from './base.json';
import Carousel from './Carousel';
import './App.css';


class Home extends Component{
    constructor(props){
      super(props)
      this.state = { base }

    }

  render() { 
    return ( 
      <div>   
        <img className="d-block w-100" src="http://www.andreavilallonga.com/atelier/wp-content/uploads/image45.jpg" alt="First slide" />  
        <nav><h1>NEW ARRIVALS</h1></nav>
        <Carousel></Carousel>
      </div>

    );
  }
}

export default Home;