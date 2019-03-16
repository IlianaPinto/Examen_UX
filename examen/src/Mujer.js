import React, { Component } from 'react'
import './App.css'
import { base } from './base.json'
import Cuadro from './Cuadro'
import firebase from "firebase"

class Mujer extends Component {

  constructor(){
    super()
    this.state = { 
      base
    }
  }

  componentDidMount = () => {
    const nameRef = firebase.database().ref('base')
    nameRef.on('value',(snapshot) => {
      var scores = snapshot.val()
      this.setState({base: scores})
    })
  }

  render() {
      const base = this.state.base.map((base,i) => {
        return (  
          base.genero==="Mujer" ? 
          <div className="col-md-4">
            <Cuadro precio={base.precio} tipo={base.tipo} marca={base.marca} imglink={base.imglink}></Cuadro>
          </div>
            : ""          
        )
      }) 
      return (
        <div>
          <div className="container">    
              <div className="row mt-4">
                  {base}
              </div>
            </div>  
          </div> 
      );
    }
}

export default Mujer;