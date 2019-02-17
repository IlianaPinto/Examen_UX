import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Mujer from './Mujer';
import Hombre from './Hombre';
import Kids from './Kids';
import Home from './Home';
import Search from './Search';
import { Switch, Route, Redirect} from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";

class Navbar extends Component {

  constructor(props){
    super(props)
    this.state = { 
      base,
      isOpen: false 
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className = "App">
          <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Le Scarpe</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/Home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Mujer">Women</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Hombre">Men</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Kids">Kids</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Search">Search</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <img src="https://pngimage.net/wp-content/uploads/2018/06/shopping-bag-logo-png-2.png" width="30px" height="30px"></img>
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

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

export default Navbar;

/*<nav class="navbar navbar-expand-md navbar-dark bg-dar">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Left</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="//codeply.com">Codeply</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
          </div>
          <div class="mx-auto order-0">
              <a class="navbar-brand mx-auto" href="/Home">Le Scarpe</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#"><img src="https://pngimage.net/wp-content/uploads/2018/06/logo-login-png-6.png" width="20px" height="20px"></img></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#"><img src="https://www.twitgram.com.ng/plugins/store/images/store.png" width="20px" height="20px"></img></a>
                  </li>
              </ul>
          </div>
      </nav>*/