import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
    apiKey: "AIzaSyDzb_3lOgFZ1VZp5qpJzn_Cg-bmY-wElr0",
    authDomain: "hola-mundo-7052b.firebaseapp.com",
    databaseURL: "https://hola-mundo-7052b.firebaseio.com",
    projectId: "hola-mundo-7052b",
    storageBucket: "hola-mundo-7052b.appspot.com",
    messagingSenderId: "528119207716",
})

class Prueba extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          ""
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Prueba
