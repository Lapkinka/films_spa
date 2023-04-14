import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Films from "./app/routes/Films";
import ForTest from "./app/components/ForTest";

class App extends Component {
  render() {
    const text = "1"
    return (
      <div className="App">
        <Router>
            <div>
              <Films/>
              <ForTest text = {text}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
