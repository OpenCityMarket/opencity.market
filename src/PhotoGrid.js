import React, { Component } from 'react';
import Gallery from "react-photo-gallery";

import p1 from './images/populuxe1/p1-1.jpg';
import p2 from './images/populuxe1/p1-2.jpg';
import p3 from './images/populuxe1/p1-3.jpg';
import p4 from './images/populuxe1/p1-4.jpg';
import p5 from './images/populuxe1/p1-5.jpg';
import p6 from './images/populuxe1/p1-6.jpg';
import p7 from './images/populuxe1/p1-7.jpg';
import p8 from './images/populuxe1/p1-8.jpg';
import p9 from './images/populuxe1/p1-9.jpg';
import p10 from './images/populuxe1/p1-10.jpg';
import p11 from './images/populuxe1/p1-11.jpg';
import p12 from './images/populuxe1/p1-12.jpg';
import p13 from './images/populuxe1/p1-13.jpg';
import p14 from './images/populuxe1/p1-14.jpg';
import p15 from './images/populuxe1/p1-15.jpg';
import p16 from './images/populuxe1/p1-16.jpg';

import './PhotoGrid.css';

const shuffle = function(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let photos = [
  {
    src: p1,
    width: 1000,
    height: 626
  },
  {
    src: p2,
    width: 1000,
    height: 708
  },
  {
    src: p3,
    width: 1000,
    height: 724
  },
  {
    src: p4,
    width: 1000,
    height: 667
  },
  /*
  {
    src: p5,
    width: 1000,
    height: 635
  },
  
  {
    src: p6,
    width: 1000,
    height: 719
  },
  */
  {
    src: p7,
    width: 1000,
    height: 690
  },
  {
    src: p8,
    width: 1000,
    height: 667
  },
  {
    src: p9,
    width: 667,
    height: 1000
  },
  {
    src: p10,
    width: 1000,
    height: 790
  },
  {
    src: p11,
    width: 1000,
    height: 667
  },
  {
    src: p12,
    width: 1000,
    height: 667
  },
  /*
  {
    src: p13,
    width: 1000,
    height: 667
  },
  */
  {
    src: p14,
    width: 1000,
    height: 679
  },
  {
    src: p15,
    width: 1000,
    height: 667
  }
];

photos = shuffle(photos);

class PhotoGrid extends Component {

  render() {
    return (
      <Gallery photos={photos} margin={5} direction={"row"}/>
    );
  }
}

export default PhotoGrid;