import React from 'react';
import * as typeformEmbed from '@typeform/embed';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "https://raincitymarket.typeform.com/to/dWa0Ip", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }
  render() {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
    );
  }
}

export default Form;