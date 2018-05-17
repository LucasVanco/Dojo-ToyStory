import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from './assets/logo.png';
import ToyList from './components/ToyList'
import AddToy from './components/AddToy'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dojo ToyStory</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={ToyList} />
            <Route path="/add" component={AddToy} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
