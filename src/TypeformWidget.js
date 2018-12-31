import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import './TypeformWidget.css';

class TypeformWidget extends React.Component {
    constructor(props) {
      super(props);
      this.openForm = this.openForm.bind(this);
    }
  
    openForm() {
      this.typeformEmbed.typeform.open();
    }
  
    render() {
      return (
        <div className="Typeform">
          <ReactTypeformEmbed
            popup={false}
            opacity={0}
            url={'https://raincitymarket.typeform.com/to/dWa0Ip'}
            hideHeaders={true}
            hideFooter={true}/>
        </div>
      );
    }
}


export default TypeformWidget;