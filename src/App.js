import React, { Component } from 'react';
import GetSearch from "./app/components/GetSeacrh"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h1>Work</h1>
          <GetSearch />
      </div>
    );
  }
}

export default App;
