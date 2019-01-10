import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/ocm-logo.svg';
import logoH from './images/ocm-logo-horizontal.svg';
import './Thanks.css';


class Thanks extends Component {
  render() {
    return (
      <div className="Thanks">
        <img src={logoH} className="logo" alt="logo" />
        <h1>
          Thanks for sharing your popup ideas.
        </h1>
        <h2>
          Stay connected to find out about future events.
        </h2>

      </div>
    );
  }
}

export default Thanks;
