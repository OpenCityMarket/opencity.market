import React, { Component } from 'react';
import logoH from './images/ocm-logo-horizontal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

import './Thanks.css';

class Thanks extends Component {
  render() {
    return (
      <div className="Thanks">
        <img src={logoH} className="logo" alt="logo" />
        <h1>
          To get updates,<br />follow our Facebook Event!
        </h1>
        <div className="fb-page" data-href="https://www.facebook.com/opencitymkt/" data-tabs="events" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/opencitymkt/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/opencitymkt/">Open City Market</a></blockquote></div>
        <div id="share">
          <a className="social" href="https://www.facebook.com/opencitymkt/" target="blank"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className="social" href="https://twitter.com/opencitymarket" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="social" href="https://instagram.com/opencitymarket" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

      </div>
    );
  }
}

export default Thanks;
