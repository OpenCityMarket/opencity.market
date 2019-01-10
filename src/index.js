import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Thanks from './Thanks';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={App} />
                <Route path="/thanks" component={Thanks} />
            </main>
        </div>    
    </Router>,
    document.getElementById('root'),
);

