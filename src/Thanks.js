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
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fopencitymkt%2F%3Feid%3DARAXQjOSlzupVqxusYsVVndgjyFSfshRmzpUYpWdueNnTVAHLCxaGs6TNlaWZCc1T7--xr_twt4uoRF2&tabs=events&width=340&height=350&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=231965911026130" width={340} height={350} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />        
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
