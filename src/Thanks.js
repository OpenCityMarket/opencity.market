import React, { Component } from 'react';
import logoH from './images/ocm-logo-horizontal.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

import './Thanks.css';



class Thanks extends Component {
  render() {
    return (
      <div className="Thanks">
        <img src={logoH} className="logo" alt="logo" />
        <h1>
          Thanks for your input!
        </h1>
        <h2>
          Stay connected to find out about future events.
        </h2>

        <div id="share">
          <a className="social" href="https://www.facebook.com/opencitymkt/" target="blank"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className="social" href="https://twitter.com/opencitymarket" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="social" href="https://plus.google.com/share?url={{url}}" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="social" href="https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&source={{source}}" target="blank"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
        </div>

      </div>
    );
  }
}

export default Thanks;
