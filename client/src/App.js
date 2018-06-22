import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Jokes from './jokes/Jokes';
import Signup from './auth/Signup';
import Signin from './auth/Signin.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Route exact path= "/signin" component={Signin} />
        <Route exact path= "/jokes" component={Jokes} />
        <Route exact path= "/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
