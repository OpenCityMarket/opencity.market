import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import logo from './images/ocm-logo.svg';
import logoH from './images/ocm-logo-horizontal.svg';
import populuxe from './images/populuxe.png';
import './App.css';

const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

/*  Pinkish white: #F3F3F2
 *  Purple: #6F3DC7
 *  Charcoal: #162023
 *  Redish Orange: #D44A4A
 *  Alternates:
 *  Burnt Orange: #AC583A
 *  Light bluish grey: #d4e2f0
 *  Lighter bluish grey: #c7daec
 *  Darker bluish grey: #a2c0de
 *  Eggplant: #4F3E55
 */

const originalColors = ['#FBF5F2', '#54434f', '#d72847'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  render() {

    return (
      <div className="App">
        <ReactFullpage
          licenseKey={"AFB8D2CC-2D904B8B-88534623-E756EC1D"}
          debug /* Debug logging */
          scrollOverflow={false}
          navigation
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          pluginWrapper={pluginWrapper}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="section section-one">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    <span>A popup market of local indie shops,</span><br/>
                    <span>curated by you and your neighbors.</span>
                </h3>
                <div className="more">
                  <div>Want to come to our upcoming Seattle event?</div>
                  <i onClick={() => fullpageApi.moveSectionDown()} className="fas fa-angle-down more-arrow"></i>
                </div>
              </div>
              <div className="section section-two">
                <div className="event">
                  <img src={logoH} className="logoH" alt="Open City Market" />
                  <span>@</span>
                  <a href="https://www.populuxebrewing.com" target="_blank"><img src={populuxe} className="populuxe" alt="Populuxe Brewing" /></a>
                </div>
                <h3>
                  <span>We're hosting a popup market on March 2nd</span><br/>
                  <span>at Populuxe Brewing in Phrelard, Seattle.</span>
                </h3>
                <div className="more">
                  <div>Vote for your favorite popups.</div>
                  <i onClick={() => fullpageApi.moveSectionDown()} className="fas fa-angle-down more-arrow"></i>
                </div>
              </div>
              <div className="section fp-noscroll section-three">
                <div className="event">
                  <img src={logoH} className="logoH" alt="Open City Market" />
                </div>
                <form action="https://getform.io/f/a79ea2ef-201e-4a7a-9640-6d4a067dd892" method="POST">
                  <input type="text" id="name" placeholder="Name" className="highlight" name="name" />
                  <input type="email" id="email" placeholder="Email Address" className="highlight" name="email" />
                  <textarea id="response" placeholder="What kinds of shops do you want at our Populuxe market event?" className="highlight" name="response" />
                  <input type="submit" value="Send" />
                </form>
              </div>                            
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
