import React, { Component } from 'react';
import queryString from 'query-string';
import logo from './images/ocm-logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const values = queryString.parse(this.props.location.search);
    this.typeformUrl = "https://opencitymarket.typeform.com/to/ONat9h";
    if (values.src) {
      this.typeformUrl = this.typeformUrl + "?src=" + values.src;
    } else {
      this.typeformUrl = this.typeformUrl + "?src=web";
    }
   }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A new popup market in Seattle,<br/>where <span className="em">you</span> decide what shops to feature</h1>
        <h2>March 2nd, Populuxe Brewing, 12 to 5pm</h2>  
        <a href={this.typeformUrl} className="button">Suggest Popups for the Market</a> 
        <div className="contact-container">
          <div className="contact-label">Have a popup shop?</div>
          <div className="contact">Contact <a href="mailto:hi@opencity.market">hi@opencity.market</a></div>
        </div>
      </div>
    );
  }
}

export default App;
