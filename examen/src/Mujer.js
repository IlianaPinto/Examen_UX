import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import { Card, Label, Button, Image } from 'semantic-ui-react'
import Cuadro from './Cuadro'

class Mujer extends Component {

  constructor(props){
    super(props)
    this.state = { 
      base
    }
  }

    render() {
      const base = this.state.base.map((base,i) => {
        return (
          <div className="col-md-4">
          {base.genero==="Mujer" ? 
            <Cuadro precio={base.precio} tipo={base.tipo} marca={base.marca} imglink={base.imglink}></Cuadro>
          : null}  
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

export default Mujer;