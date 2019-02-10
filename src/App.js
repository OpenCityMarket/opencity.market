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
  { key: 'v1_1', img: v1_1, vendor: 'Raised Doughnuts', description: 'Elevated fried confections', url: 'https://www.raiseddoughnuts.com/'},
  { key: 'v1_2', img: v1_2, vendor: 'Raised Doughnuts', description: 'Elevated fried confections', url: 'https://www.raiseddoughnuts.com/'},
  { key: 'v1_3', img: v1_3, vendor: 'Raised Doughnuts', description: 'Elevated fried confections', url: 'https://www.raiseddoughnuts.com/' },
  { key: 'v1_4', img: v1_4, vendor: 'Raised Doughnuts', description: 'Elevated fried confections', url: 'https://www.raiseddoughnuts.com/' },
  { key: 'v1_5', img: v1_5, vendor: 'Raised Doughnuts', description: 'Elevated fried confections', url: 'https://www.raiseddoughnuts.com/' },
  { key: 'v2_1', img: v2_1, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_2', img: v2_2, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_3', img: v2_3, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_4', img: v2_4, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_5', img: v2_5, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_6', img: v2_6, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_7', img: v2_7, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v2_8', img: v2_8, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v3_1', img: v3_1, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v3_2', img: v3_2, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v3_3', img: v3_3, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v3_4', img: v3_4, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v3_5', img: v3_5, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v4_1', img: v4_1, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_2', img: v4_2, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_3', img: v4_3, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_4', img: v4_4, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_5', img: v4_5, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_6', img: v4_6, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v4_7', img: v4_7, vendor: 'Frelard Tamales', description: 'Authentic tamales, vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v5_1', img: v5_1, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'v5_2', img: v5_2, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'v5_3', img: v5_3, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'v5_4', img: v5_4, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'h_1', img: h_1, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'h_2', img: h_2, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'h_3', img: h_3, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'h_4', img: h_4, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'h_5', img: h_5, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'h_6', img: h_6, vendor: 'Populuxe Brewing', description: 'Well behaved kids and dogs welcome', url: 'https://www.populuxebrewing.com/' },
];

images = shuffle(images);

var buttonNames = ["All", "Populuxe Brewing", "Raised Doughnuts", "MODHome Ceramics", "Henna Art by Antoinette", "Frelard Tamales", "Peasant Food Manifesto"]

class App extends Component {
  constructor(props) {
    super(props);
    const values = queryString.parse(this.props.location.search);
    this.typeformUrl = 'https://opencitymarket.typeform.com/to/ONat9h';
    this.eventUrl = 'https://www.facebook.com/events/226887871572780/';
    this.state = {
      activeButton: 'All',  
    };

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

          <a className="button" href={this.eventUrl}>Get on the Guest List!</a> 

        </div>

        <div className="section section-two">
          <h3>Meet our Popup Shops</h3>
          <p>
            We asked over 600 Seattleites<br/>
            about their favorite popups shops.<br/>
            <div>Here's who we chose.</div>
          </p>

          <StackGrid
            monitorImagesLoaded
            columnWidth={ 250 }          
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
            <a className="social" href="https://www.facebook.com/opencitymkt/" target="blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="social" href="https://instagram.com/opencitymarket" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="social" href="https://twitter.com/opencitymarket" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>

      </div>
    );
  }
}

export default sizeMe()(App);