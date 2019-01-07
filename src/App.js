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

/*  OCM BLUE: #19d8d6
 *  whitish pink: #FBF5F2
 *  Charcoal: #54434f
 *  dark pinkish red: #D72847
 *  light pinkish red: #efa9b5
 *  accent color: #FECC63
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
                <h3>
                  <span>We're hosting a popup market on March 2nd</span><br/>
                  <span>at Populuxe Brewing in Phrelard, Seattle.</span>
                </h3>
                <div className="event">
                  <img src={logoH} className="logoH" alt="Open City Market" />
                  <span>@</span>
                  <a href="https://www.populuxebrewing.com" target="_blank"><img src={populuxe} className="populuxe" alt="Populuxe Brewing" /></a>
                </div>  
                <div className="info-block">
                  <h4>Catchy subtitle here</h4>
                  <p>
                    Lorem ipsum dolor sit amet, graeco lucilius in vis, usu ea alia sapientem. Sea ne nisl meis assum, eum id congue reprimique. Eos alii aperiam vivendo ne. In dictas gubergren mel, has petentium consequuntur at. At vim vide alterum utroque.
                  </p>  
                </div>              
                <div className="more">
                  <div>Vote for your favorite popups.</div>
                  <i onClick={() => fullpageApi.moveSectionDown()} className="fas fa-angle-down more-arrow"></i>
                </div>
              </div>
              <div className="section fp-noscroll section-three">
                <div className="event">
                  <img src={logoH} className="logoH" alt="Open City Market" />
                  <div className="subtitle">
                    Guest List Signup for our March 2nd Popup Market at Populuxe Brewing.
                  </div>
                </div>  
                <form action="https://getform.io/f/a79ea2ef-201e-4a7a-9640-6d4a067dd892" method="POST">
                  <input type="text" id="name" placeholder="Name" className="highlight" name="name" />
                  <input type="email" id="email" placeholder="Email Address" className="highlight" name="email" />
                  <textarea id="response" placeholder="What kinds of shops do you want at the Populuxe market?" className="highlight" name="response" />
                  <label className="container">
                    I have a shop and I'd like to be featured at the market.
                    <input type="checkbox" name="vendor" id="vendor" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    I have space where you can host the next market.
                    <input type="checkbox" name="space" id="space" />
                    <span className="checkmark"></span>
                  </label>
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
