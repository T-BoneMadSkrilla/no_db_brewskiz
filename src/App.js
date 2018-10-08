import React, { Component } from 'react';
import Test from './Components/Test';
import './App.css';
import TopBottomImg from './Components/TopBottomImg';


class App extends Component {
  render() {
    return (
      <div className="App">
      <TopBottomImg/>
     
      <div >
       < Test />
       </div>

       <div>
         <TopBottomImg/>
       </div>
      </div>
    );
  }
}

export default App;
