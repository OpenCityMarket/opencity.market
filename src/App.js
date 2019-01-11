import React, { Component } from 'react';
import logo from './images/ocm-logo.svg';
import './App.css';

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
        <a href="https://opencitymarket.typeform.com/to/u8Jwdi" className="button">
          Suggest Your Favorite Popups!
        </a> 
   
        <div className="contact-container">
          <div className="contact-label">
            Have a popup shop?
          </div>
          <div className="contact">
            Contact <a href="mailto:hi@opencity.market">hi@opencity.market</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
