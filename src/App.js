import React, { Component } from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';
import { Card } from 'antd';
import queryString from 'query-string';
import logo from './images/ocm-logo.png';

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

const renderCard = ({key, title, description, img}) => (
  <Card key={key} hoverable style={{}} cover={ <img alt="" src={img} /> }>
  </Card>
)

const shuffle = function(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let images = [
  { key: 'v1_1', img: v1_1, vendor: 'Raised Doughnuts' },
  { key: 'v1_2', img: v1_2, vendor: 'Raised Doughnuts' },
  { key: 'v1_3', img: v1_3, vendor: 'Raised Doughnuts' },
  { key: 'v1_4', img: v1_4, vendor: 'Raised Doughnuts' },
  { key: 'v1_5', img: v1_5, vendor: 'Raised Doughnuts' },
  { key: 'v2_1', img: v2_1, vendor: 'MODHome Ceramics' },
  { key: 'v2_2', img: v2_2, vendor: 'MODHome Ceramics' },
  { key: 'v2_3', img: v2_3, vendor: 'MODHome Ceramics' },
  { key: 'v2_4', img: v2_4, vendor: 'MODHome Ceramics' },
  { key: 'v2_5', img: v2_5, vendor: 'MODHome Ceramics' },
  { key: 'v2_6', img: v2_6, vendor: 'MODHome Ceramics' },
  { key: 'v2_7', img: v2_7, vendor: 'MODHome Ceramics' },
  { key: 'v2_8', img: v2_8, vendor: 'MODHome Ceramics' },
  { key: 'v3_1', img: v3_1, vendor: 'Henna Art by Antoinette' },
  { key: 'v3_2', img: v3_2, vendor: 'Henna Art by Antoinette' },
  { key: 'v3_3', img: v3_3, vendor: 'Henna Art by Antoinette' },
  { key: 'v3_4', img: v3_4, vendor: 'Henna Art by Antoinette' },
  { key: 'v3_5', img: v3_5, vendor: 'Henna Art by Antoinette' },
  { key: 'v4_1', img: v4_1, vendor: 'Frelard Tamales' },
  { key: 'v4_2', img: v4_2, vendor: 'Frelard Tamales' },
  { key: 'v4_3', img: v4_3, vendor: 'Frelard Tamales' },
  { key: 'v4_4', img: v4_4, vendor: 'Frelard Tamales' },
  { key: 'v4_5', img: v4_5, vendor: 'Frelard Tamales' },
  { key: 'v4_6', img: v4_6, vendor: 'Frelard Tamales' },
  { key: 'v4_7', img: v4_7, vendor: 'Frelard Tamales' },
  { key: 'v5_1', img: v5_1, vendor: 'Peasant Food Manifesto' },
  { key: 'v5_2', img: v5_2, vendor: 'Peasant Food Manifesto' },
  { key: 'v5_3', img: v5_3, vendor: 'Peasant Food Manifesto' },
  { key: 'v5_4', img: v5_4, vendor: 'Peasant Food Manifesto' },
  { key: 'h_1', img: h_1, vendor: 'Populuxe Brewing' },
  { key: 'h_2', img: h_2, vendor: 'Populuxe Brewing' },
  { key: 'h_3', img: h_3, vendor: 'Populuxe Brewing' },
  { key: 'h_4', img: h_4, vendor: 'Populuxe Brewing' },
  { key: 'h_5', img: h_5, vendor: 'Populuxe Brewing' },
  { key: 'h_6', img: h_6, vendor: 'Populuxe Brewing' },
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
    this.onButtonClick = this.onButtonClick.bind(this);
    this.filterBySelection = this.filterBySelection.bind(this);

    if (values.src) {
      this.typeformUrl = this.typeformUrl + '?src=' + values.src;
    } else {
      this.typeformUrl = this.typeformUrl + '?src=web';
    }
   }

  onButtonClick(name){
    this.setState({
      activeButton: name
    })
  }

  filterBySelection(item) {
    if (this.state.activeButton === "All" || 
        this.state.activeButton === item.vendor) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.state.activeButton)

    const { width, height } = this.props.size
    const buttons = buttonNames.map(d => 
      <button id={d} onClick={this.onButtonClick.bind(this, d)} className={this.state.activeButton === d ? "btn btn-active" : "btn"}>{d}</button>
    )

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A new popup market in Seattle,<br/>where <span className="em">you</span> decide what shops to feature</h1>
        <h2>March 2nd, Populuxe Brewing, 12 to 5pm</h2>  
        <a href={this.eventUrl} className="button">Get on the Guest List!</a> 

        <div>
          {buttons}
        </div>

        <StackGrid
          monitorImagesLoaded
          columnWidth={200}          
          duration={600}
          gutterWidth={17}
          gutterHeight={17}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          { images.filter(this.filterBySelection).map(renderCard) }
        </StackGrid>

        <div className="contact-container">
          <div className="contact-label">Have a popup shop?</div>
          <div className="contact">Contact <a href="mailto:hi@opencity.market">hi@opencity.market</a></div>
        </div>
      </div>
    );
  }
}

export default sizeMe()(App);