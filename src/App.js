import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import TypeformWidget from './TypeformWidget';
import logo from './images/logo.svg';
import populuxe from './images/populuxe.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TypeformWidget/>
      </div>
    );
  }
}

export default App;
