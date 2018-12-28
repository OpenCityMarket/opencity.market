import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3><span>A popup market of local indie shops,&nbsp;</span><br/><span>curated by you and your neighbors.</span></h3>
        </header>
      </div>
    );
  }
}

export default App;
