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
        <Carousel></Carousel>
      </div>

    );
  }
}

export default Home;