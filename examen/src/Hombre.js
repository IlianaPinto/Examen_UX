import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import { Card, Statistic, Button } from 'semantic-ui-react'

class Hombre extends Component {

    constructor(props){
      super(props)
      this.state = { base }

    }

  render() {
    const base = this.state.base.map((base,i) => {
      return (
        <Card>        
        {base.genero==="Hombre" ?        
              <p>
                <img src = {base.imglink} width="200px" heigth="200px" alt="img"></img>
                <br></br>
                {base.marca}
                <br></br>
                {base.precio}  
                <br></br>
                <button>Add to Cart</button>
              </p>            
        : ""}  
        
        </Card>
        
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

export default Hombre;