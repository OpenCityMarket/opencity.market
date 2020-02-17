import React, { Component } from 'react';
import logoH from './images/ocm-logo-horizontal.png';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Airtable from 'airtable';
import './EventApplication.css';

var base = new Airtable({apiKey: 'keypOFMtu4yRbrp9j'}).base('appUOvrlIHxc0JGyX');
class EventApplication extends Component {
  constructor(props, state) {
    super(props);
    this.onToggleChange = this.onToggleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      applyState: '',
      isSubmitted: false,
      vendorName: '',
      popupName: '',
      popupDateStr: '',
      popupDisclaimer: '',
      isLoading: true
    };
    console.log(props.match.params.id);
  }

  componentDidMount() {
    let that = this;
    base('Popup Vendors').find(this.props.match.params.id, function(err, record) {
      if (err) { console.error(err); return; }
      console.log('Retrieved', record);
      that.setState({
        popupName: record.fields['Popup Name'],
        vendorName: record.fields['Vendor Business Name'],
        popupDateStr: record.fields['Popup Easy Date String'],
        venueImg: record.fields['Popup Image Url'],
        popupDisclaimer: record.fields['Popup Disclaimer'],
        isLoading: false
      });
      if (!(record.fields.Status === 'Invited' || record.fields.Status === 'To Invite')) {
        that.setState({isSubmitted: true});
      }
    });
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
        <h2 className="prompt">Thanks, we got your response and will be in touch!</h2>
    } else {
      CollectInput = 
        <div className="inputContainer">
          <ButtonToolbar className="chart-controls justify-content-md-center">
            <ToggleButtonGroup type="radio" name="Apply" value={this.state.applyState} onChange={this.onToggleChange}>
                    <ToggleButton value="Applied" type="radio" variant="outline-secondary" size="lg">Yes</ToggleButton>
                    <ToggleButton value="Busy" type="radio" variant="outline-secondary" size="lg">No, too busy</ToggleButton>
                    <ToggleButton value="Declined" type="radio" variant="outline-secondary" size="lg">Not interested</ToggleButton>
            </ToggleButtonGroup>
            <Button className="submitButton" variant="primary" size="lg" onClick={this.onSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </div>
    }

    if ((this.state.isLoading)) {
      return <div></div>
    }
    return (
      <div className="EventApplication">
        <img src={logoH} className="logo" alt="logo" />
        <h1>
          Hi, {this.state.vendorName}!
        </h1>
        <h1 className="line-2">
          Apply to our {this.state.popupName}?
        </h1>
        <div className="popup-info">
          {this.state.popupDateStr}
        </div>

        {CollectInput}

        <img className="popupImg" src={this.state.venueImg} alt="map of ballard breweries"/>
        <div className="popupDisclaimer">{this.state.popupDisclaimer}</div>

      </div>
    );
  }
}

export default EventApplication;
