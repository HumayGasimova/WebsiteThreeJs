import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import configureStore,{
    history
} from './store/index';
import {
    Route,
    Switch
} from 'react-router';
import {
    ConnectedRouter
} from 'connected-react-router';
import App from '../../app/components/app';

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route 
                        exact 
                        path="/"
                        render={()=>(<div>Match</div>)}/>
                    <Route 
                        render={()=>(<div>Match</div>)}/>
                </Switch>
            </App>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);
