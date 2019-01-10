import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ocm-logo.svg';
import logoH from './images/ocm-logo-horizontal.svg';
import './App.css';





const originalColors = ['#FBF5F2', '#54434f', '#d72847'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          We're hosting a new kind of popup market,<br/>where <span className="em">you</span> decide what shops to feature.
        </h1>
        <h2>
          March 2nd, Populuxe Brewing, 2 to 7pm.
        </h2>  
        <a href="https://raincitymarket.typeform.com/to/u8Jwdi" className="button">
          Cast Your Vote
        </a> 
   
        <div className="contact-container">
          <div className="contact-label">
            Selling at the Market
          </div>
          <div className="contact">
            Have a popup shop? Contact <a href="mailto:hi@opencity.market">hi@opencity.market</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
