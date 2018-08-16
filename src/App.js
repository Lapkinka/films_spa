import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Films from "./app/routes/Films";

class App extends Component {
  render() {
    return (
      <div className="App">
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
