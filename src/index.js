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
    ConnectedRouter,
} from 'connected-react-router';

import store from './store/store';

/**
* Components
*/

import App from './app';

ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
         <App/>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);


// https://github.com/erikras/ducks-modular-redux
// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
// https://gitter.im/redux-observable/redux-observable/archives/2016/11/16
// https://gitter.im/redux-observable/redux-observable/archives/2016/09/22
// https://jsbin.com/vamucaj/edit?js,output
// https://redux-observable.js.org/docs/basics/Epics.html
// https://dev.to/andrejnaumovski/async-actions-in-redux-with-rxjs-and-redux-observable-efg
// https://medium.com/@cartant/rxjs-avoiding-rxjs-compat-4b79a566359b
// https://www.youtube.com/watch?v=f9S5uYqVGaU&t=832s