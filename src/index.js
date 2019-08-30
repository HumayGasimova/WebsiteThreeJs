/**
 * Libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';
import {
    history
} from './store/store';

import {
    Route,
    Switch
} from 'react-router-dom';
import {
    ConnectedRouter,
} from 'connected-react-router';
import store from './store/store';

/**
 * Components
 */

import App from './components/app';


// const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
            <Switch>
               <Route 
                  // exact 
                  path="/"
                  component={App}
                  />
            </Switch>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);
