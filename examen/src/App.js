import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Navbar from './Navbar';
import logo from './logo.jpeg'

class App extends Component {

  constructor(props){
      super(props)
      this.state = { 
        products: base
      }
  }

  render() {
    return (
      <div className = "App">
        <nav>
          </nav>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
