import React, { Component } from 'react';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import PhotoGrid from './PhotoGrid';
import VendorGrid from './VendorGrid';
import logo from './images/ocm-logo-horizontal.png';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    const values = queryString.parse(this.props.location.search);
    this.typeformUrl = 'https://opencitymarket.typeform.com/to/ONat9h';
    this.eventUrl = 'https://www.facebook.com/events/226887871572780/';

    if (values.src) {
      this.typeformUrl = this.typeformUrl + '?src=' + values.src;
    } else {
      this.typeformUrl = this.typeformUrl + '?src=web';
    }
   }

  render() {
    return (
      <div className="App">

        <div className="section section-one">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
            <h1>A new popup market in Seattle,<br/>where <span className="em">you</span> decide what shops to feature</h1>
          */}
          <h1>Community-Centered Popup Markets</h1>
          <div className="joinUs">Join us at our next event</div>
          <h2>Populuxe Brewing, Seattle<br/>April 27<sup>th</sup>, 12 to 5pm</h2>
          <a className="button" href={this.eventUrl} target="_blank" rel="noopener noreferrer">Become a Vendor</a> 
        </div>

        <div className="section section-two">
          <PhotoGrid />
        </div>

        <div className="section section-three">
          <h3>Past Vendors</h3>
          <VendorGrid />
        </div>

        <div className="section section-four">
          <div className="contact-container">
            <div className="contact-label">Contact Us</div>
            <div className="contact"><a href="mailto:hi@opencity.market">hi@opencity.market</a></div>
          </div>
          <div id="share">
            <a className="social" href="https://www.facebook.com/opencitymkt/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="social" href="https://instagram.com/opencitymarket" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="social" href="https://twitter.com/opencitymarket" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;