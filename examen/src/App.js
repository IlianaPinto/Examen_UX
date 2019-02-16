import React, { Component } from 'react';
import logo from './logo.svg';
import NewTux from './NewTux.svg';
import './App.css';
import { base } from './base.json';
import Mujer from './Mujer';
import Hombre from './Hombre';
import Kids from './Kids';
import Home from './Home';
import Search from './Search';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

    constructor(props){
      super(props)
      this.state = { base }

    }

  render() {
    return (
      <div className = "App">
      <nav class="navbar navbar-expand-sm bg-ligth navbar-dark">
        <ul class="navbar-nav ml-auto">
          <a class="nav-link py-0" href=""> Log In</a>
        </ul>
      
      </nav>
        <div className="component">           
          <nav class="navbar navbar-expand-sm bg-light navbar-light"> 
          <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href = "/Home">Home</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/Mujer"> Women</a>                              
                </li>            
                <li class="nav-item active">
                  <a class="nav-link" href="/Hombre">Men</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/Kids">Kids</a>
                </li>
              </ul>   
            <ul class="navbar-nav ml-auto">
              <form class="form-inline" action="/action_page.php">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </ul> 
          </nav>
        </div>

        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Mujer" component={Mujer}/>
          <Route path="/Hombre" component={Hombre}/>
          <Route path="/Kids" component={Kids}/>
          <Route path="/Search" component={Search}/>
          <Redirect to = "/"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default App;
