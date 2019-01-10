import React from 'react';
import App from './App';
import Thanks from './Thanks';
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/thanks" component={Thanks} />
            </Switch>
        </div>
    );
};