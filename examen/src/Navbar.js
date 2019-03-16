import React, { Component } from 'react';
import './App.css';
import Mujer from './Mujer';
import Hombre from './Hombre';
import Kids from './Kids';
import Home from './Home';
import Search from './Search';
import logo from './logo.jpeg'
import { Switch, Route, Redirect} from 'react-router-dom';
import {Collapse, Navbar,NavbarToggler, NavbarBrand, Nav,NavItem,NavLink,Button,Container} from 'reactstrap';
import firebase from "firebase"
import Alerta from './alerta'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSignedIn: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className = "App">
          <Navbar color="dar" dark expand="md">
          <Container>
            <NavbarBrand href="/Home"><img src={logo} width="200px" height="50px"></img></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  {this.state.isSignedIn?
                      <NavItem>
                        <Button color="link" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                      </NavItem>   
                      :
                      <NavItem>
                        <Alerta></Alerta>
                      </NavItem> 
                      }
                    <NavItem>
                      <NavLink active href="/Mujer">Women</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink active href="/Hombre">Men</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink active href="/Kids">Kids</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink active href="/Search">Search</NavLink>
                    </NavItem>
                    
                  </Nav>
                </Collapse>
              </Container>
                
         </Navbar>

        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Mujer" component={Mujer}/>
          <Route path="/Hombre" component={Hombre}/>
          <Route path="/Kids" component={Kids}/>
          <Route path="/Search" component={Search}/>
          <Route path="/" component={Home}></Route>
          <Redirect to = "/" component={Home}></Redirect>
        </Switch>
      </div>
    );
  }
}

export default Header;