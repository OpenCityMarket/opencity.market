import React, { Component } from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import sizeMe from 'react-sizeme';
import { Card } from 'antd';

import v1_3 from './images/vendors/v1_3.jpg';
import v2_2 from './images/vendors/v2_2.jpg';
import v3_1 from './images/vendors/v3_1.jpg';
import v4_2 from './images/vendors/v4_2.jpg';
import v5_4 from './images/vendors/v5_4.jpg';
import h_5 from './images/vendors/h_5.jpg';
import v6_1 from './images/vendors/v6_1.jpg';
import v7_1 from './images/vendors/v7_1.jpg';
import v8_1 from './images/vendors/v8_1.jpg';


import './VendorGrid.css';

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

let images = [
  { key: 'h_5', img: h_5, vendor: 'Populuxe Brewing', description: 'Our host and friendly neighborhood brewery; doggos and kiddos welcome', url: 'https://www.populuxebrewing.com/' },
  { key: 'v1_3', img: v1_3, vendor: 'Raised Doughnuts', description: 'Elevated fried confections from the Central District', url: 'https://www.raiseddoughnuts.com/' },
  { key: 'v2_2', img: v2_2, vendor: 'MODHome Ceramics', description: 'Rustic modern clay works', url: 'https://www.modhomeceramics.com/' },
  { key: 'v3_1', img: v3_1, vendor: 'Magic Magpie Studio', description: 'Henna Art by Antoinette', url: 'http://antoin.net/' },
  { key: 'v4_2', img: v4_2, vendor: 'Frelard Tamales', description: 'Authentic and handmade tamales, with vegan-friendly options', url: 'http://www.frelardtamales.com/' },
  { key: 'v5_4', img: v5_4, vendor: 'Peasant Food Manifesto', description: 'Korean-inspired street food fusions', url: 'http://www.peasantfoodmanifesto.com/' },
  { key: 'v6_1', img: v6_1, vendor: 'Blue Highway Games', description: 'Cards and board games available for you to play and buy', url: 'http://www.bluehighwaygames.com' },
  { key: 'v7_1', img: v7_1, vendor: 'Holly Haymaker', description: 'Playful ceramic art, jewelry, and adorable animal scultures', url: 'http://www.hollyhaymaker.com' },
  { key: 'v8_1', img: v8_1, vendor: 'Sage to Sea', description: 'Rugged sacks, pouches, and wallets made from leather and canvas', url: 'http://www.sagetoseadesigns.com' },
];

class VendorGrid extends Component {

  render() {
    const { width, height } = this.props.size
    return (
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
    );
  }
}

export default sizeMe()(VendorGrid);