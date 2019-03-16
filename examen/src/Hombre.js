import React, { Component } from 'react';
import './App.css';
import Cuadro from './Cuadro'
import firebase from "firebase"

class Hombre extends Component {

  constructor(props){
    super(props)
    this.state = { 
      base: []
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
          
          base.genero==="Hombre" ? 
            <div className="col-md-4">
              <Cuadro precio={base.precio} tipo={base.tipo} marca={base.marca} imglink={base.imglink}></Cuadro>
            </div>
          : null  
          
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