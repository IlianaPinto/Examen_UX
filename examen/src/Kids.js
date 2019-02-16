import React, { Component } from 'react';
import NewTux from './NewTux.svg';
import './App.css';
import { base } from './base.json';

class Kids extends Component {

    constructor(props){
      super(props)
      this.state = { base }

    }

  render() {
    const base = this.state.base.map((base,i) => {
      return (
        <div className="col-md-4">
        {base.genero=="Kids" ? 
          <div className = "card mt-4">
            <div className="card-body">        
              <p>
                <img src = {base.imglink} width="200px" heigth="200px"></img>
                <br></br>
                {base.marca}
                <br></br>
                {base.precio}  
                <br></br>
                <button>Add to Cart</button>
              </p>             
            </div>
          </div>
        : ""}  
        </div>
      )
    }) 
    return (
      
       
        <div className="container">
          <div className="row mt-4">
            {base}
          </div>
        </div> 
      
    );
  }
}

export default Kids;