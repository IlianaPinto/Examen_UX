import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Mujer from './Mujer';
import Hombre from './Hombre';
import Kids from './Kids';
import Home from './Home';
import Search from './Search';
import logo from './logo.jpeg'
import { Switch, Route, Redirect} from 'react-router-dom';
import {Collapse, Navbar,NavbarToggler, NavbarBrand, Nav,NavItem,NavLink,} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className = "App">
          <Navbar color="dar" dark expand="md">
            <NavbarBrand href="/Home"><img src={logo} width="200px" height="50px"></img></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
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