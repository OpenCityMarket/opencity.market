import React, { Component } from 'react';
import logoH from './images/ocm-logo-horizontal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Airtable from 'airtable';
import './EventApplication.css';

var base = new Airtable({apiKey: 'keypOFMtu4yRbrp9j'}).base('appUOvrlIHxc0JGyX');

class Thanks extends Component {
  constructor(props, state) {
    super(props);
    this.onToggleChange = this.onToggleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      applyState: 'Declined',
      isSubmitted: false
    };
    console.log(props.match.params.id);
  }

  onToggleChange(s) {
    this.setState({applyState: s});
  }

  onSubmit() {
    var that = this;
    console.log(this.state.applyState);
    base('Popup Vendors').update([
      {
        "id": this.props.match.params.id,
        "fields": {
          "Status": this.state.applyState
        }
      },
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Id'));
        console.log(record.get('Status'));
        if (record.get('Status') === that.state.applyState) {
          that.setState({isSubmitted: true});
        }
      });
    });
  }
  
  render() {
    let CollectInput;
    if (this.state.isSubmitted) {
      CollectInput = 
        <div>
          <p>Thanks, we got your response! We'll be in touch in a couple days.</p>
        </div>
    } else {
      CollectInput = 
        <div>
          <ButtonToolbar className="chart-controls justify-content-md-center">
            <ToggleButtonGroup type="radio" name="Apply" value={this.state.applyState} onChange={this.onToggleChange}>
                    <ToggleButton value="Applied" type="radio" variant="light">Yes, I'd like to apply</ToggleButton>
                    <ToggleButton value="Busy" type="radio" variant="light">I'm busy that day</ToggleButton>
                    <ToggleButton value="Declined" type="radio" variant="light">Not interested</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar className="chart-controls justify-content-md-center">
            <Button variant="primary" size="lg" onClick={this.onSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </div>
    }
    return (
      <div className="EventApplication">
        <img src={logoH} className="logo" alt="logo" />
        <h1>
          Popup Announcement!
        </h1>
        <h1>
          Populuxe Brewing, February 8th, 12 to 5pm
        </h1>
        <h2>
          Would you like to apply to be a vendor?
        </h2>

        {CollectInput}

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
