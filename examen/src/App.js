import React, { Component } from 'react';
import './App.css';
import { base } from './base.json';
import Mujer from './Mujer';
import Hombre from './Hombre';
import Kids from './Kids';
import Home from './Home';
import Search from './Search';
import logo from './logo.jpeg';
import { Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

    constructor(props){
      super(props)
      this.state = { base }

    }

  render() {
    return (
      <div className = "App">
        <nav class="navbar navbar-expand-md navbar-dark bg-dar">
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
              <a class="navbar-brand mx-auto" href="/Home">Happy Feet</a>
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
                <button class="btn btn-success" type="submit" href="/Search">Search</button>
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
