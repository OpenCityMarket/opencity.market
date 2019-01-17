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
          Stay Up To Date.<br />Follow our Facebook Event!
        </h1>

        <div class="fb-page" data-href="https://www.facebook.com/opencitymkt/" data-tabs="events" data-width="400" data-height="550" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/opencitymkt/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/opencitymkt/">Open City Market</a></blockquote></div>

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
