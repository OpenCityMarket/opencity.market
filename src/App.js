import React, { Component } from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';
import { Card } from 'antd';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from './images/ocm-logo-horizontal.png';

import v1_1 from './images/vendors/v1_1.jpg';
import v1_2 from './images/vendors/v1_2.jpg';
import v1_3 from './images/vendors/v1_3.jpg';
import v1_4 from './images/vendors/v1_4.jpg';
import v1_5 from './images/vendors/v1_5.jpg';
import v2_1 from './images/vendors/v2_1.jpg';
import v2_2 from './images/vendors/v2_2.jpg';
import v2_3 from './images/vendors/v2_3.jpg';
import v2_4 from './images/vendors/v2_4.jpg';
import v2_5 from './images/vendors/v2_5.jpg';
import v2_6 from './images/vendors/v2_6.jpg';
import v2_7 from './images/vendors/v2_7.jpg';
import v2_8 from './images/vendors/v2_8.jpg';
import v3_1 from './images/vendors/v3_1.jpg';
import v3_2 from './images/vendors/v3_2.jpg';
import v3_3 from './images/vendors/v3_3.jpg';
import v3_4 from './images/vendors/v3_4.jpg';
import v3_5 from './images/vendors/v3_5.jpg';
import v4_1 from './images/vendors/v4_1.jpg';
import v4_2 from './images/vendors/v4_2.jpg';
import v4_3 from './images/vendors/v4_3.jpg';
import v4_4 from './images/vendors/v4_4.jpg';
import v4_5 from './images/vendors/v4_5.jpg';
import v4_6 from './images/vendors/v4_6.jpg';
import v4_7 from './images/vendors/v4_7.jpg';
import v5_1 from './images/vendors/v5_1.jpg';
import v5_2 from './images/vendors/v5_2.jpg';
import v5_3 from './images/vendors/v5_3.jpg';
import v5_4 from './images/vendors/v5_4.jpg';
import h_1 from './images/vendors/h_1.jpg';
import h_2 from './images/vendors/h_2.jpg';
import h_3 from './images/vendors/h_3.jpg';
import h_4 from './images/vendors/h_4.jpg';
import h_5 from './images/vendors/h_5.jpg';
import h_6 from './images/vendors/h_6.jpg';
import v6_1 from './images/vendors/v6_1.jpg';

import './App.css';

const transition = transitions.scaleDown;

const { Meta } = Card;

const renderCard = ({key, vendor, description, url, img}) => (
  <a href={url} className="card" target="_blank" rel="noopener noreferrer">
    <Card key={key} style={{}} cover={ <img alt="" src={img} /> }>
      <Meta
      title={vendor}
      description={description}
      />
    </Card>
  </a>
)

const shuffle = function(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let images = [
  { key: 'h_5', img: h_5, vendor: 'Populuxe Brewing', description: 'Our host and friendly neighborhood brewery; doggos and kiddos welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'v1_3', img: v1_3, vendor: 'Raised Doughnuts', description: 'Elevated fried confections from the Central District', url: 'https://www.raiseddoughnuts.com/' },
  { key: 'v2_2', img: v2_2, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v3_1', img: v3_1, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v4_2', img: v4_2, vendor: 'Frelard Tamales', description: 'Authentic and handmade tamales, with vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v5_4', img: v5_4, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'v6_1', img: v6_1, vendor: 'Blue Highway Games', description: 'Cards and board games available for you to play and buy', url: 'http://www.bluehighwaygames.com' },
];

var buttonNames = ["All", "Populuxe Brewing", "Raised Doughnuts", "MODHome Ceramics", "Henna Art by Antoinette", "Frelard Tamales", "Peasant Food Manifesto"]

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
    const { width, height } = this.props.size
    return (
      <div className="App">

        <div className="section section-one">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
            <h1>A new popup market in Seattle,<br/>where <span className="em">you</span> decide what shops to feature</h1>
          */}
          <h1>A Popup Market of Local Shops<br/>Curated by the Community</h1>
          <h2>Populuxe Brewing, Seattle<br/>March 2nd, 12 to 5pm</h2>

          <a className="button" href={this.eventUrl} target="_blank" rel="noopener noreferrer">Get on the Guest List!</a> 

        </div>

        <div className="section section-two">
          <h3>Meet our Popup Shops</h3>
          <p>
            We asked over 600 Seattleites to share their favorite popups.
            Guided by their answers, we selected the best shops
            based on availability and space constraints.
          </p>

          <StackGrid
            monitorImagesLoaded
            columnWidth={ 255 }          
            duration={600}
            gutterWidth={24}
            gutterHeight={24}
            easing={easings.cubicOut}
            appearDelay={60}
            appear={transition.appear}
            appeared={transition.appeared}
            enter={transition.enter}
            entered={transition.entered}
            leaved={transition.leaved}
          >
            { images.map(renderCard) }
          </StackGrid>
        </div>

        <div className="section section-three">
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

export default sizeMe()(App);