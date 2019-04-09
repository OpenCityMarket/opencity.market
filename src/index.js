import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from './App';
import Thanks from './Thanks';
import Privacy from './Privacy';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={App} />
                <Route path="/thanks" component={Thanks} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/vote" render={() => (
                    window.location = 'http://google.com'
                )} />
            </main>
        </div>    
    </Router>,
    document.getElementById('root'),
);