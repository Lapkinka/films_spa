import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Films from "./app/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
            <div>
                <Films/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
