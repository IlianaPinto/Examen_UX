import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Navbar from './Navbar';

class App extends Component {

    constructor(props){
      super(props)
      this.state = { 
        base,
        openOrder: false,
        total: 0,
        sum: 0 
      }


    }

  render() {
    return (
      <div className = "App">
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
