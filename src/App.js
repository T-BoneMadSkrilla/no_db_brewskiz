import React, { Component } from 'react';
import Test from './Components/Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className=".AppTop"> Pick a Brew </h1>
      <div className = "">
       < Test />
       </div>
      </div>
    );
  }
}

export default App;
