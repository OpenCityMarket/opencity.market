import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Thanks from './Thanks';
import EventApplication from './EventApplication';
import Privacy from './Privacy';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={App} />
                <Route path="/thanks" component={Thanks} />
                <Route path="/application/:id" component={EventApplication} />
                <Route path="/privacy" component={Privacy} />
            </main>
        </div>    
    </Router>,
    document.getElementById('root'),
);