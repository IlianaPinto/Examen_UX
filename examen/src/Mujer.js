import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Cuadro from './Cuadro'
import firebase from "firebase"
import Login from './login/Prueba'

class Mujer extends Component {

  constructor(props){
    super(props)
    this.state = { 
      base,
      login : false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ login: !!user })
      console.log("user", user)
    })
  }

    render() {
      const base = this.state.base.map((base,i) => {
        return (  
          base.genero==="Mujer" ? 
          <div className="col-md-4">
            <Cuadro precio={base.precio} tipo={base.tipo} marca={base.marca} imglink={base.imglink}></Cuadro>
          </div>
            : null          
        )
      }) 
      return (
        <div>
        {this.state.login? "":<Login></Login>}
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