import React, { Component } from 'react';
import {base} from './base.json';
import Carouselp from './Carousep';
import './App.css';

class Home extends Component{
    constructor(props){
      super(props)
      this.state = { base }

    }

  render() { 
    return ( 
      <div>   
        <Carouselp></Carouselp>
      </div>

    );
  }
}

export default Home;