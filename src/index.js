/**
 * Libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';
import configureStore,{
    history
} from './store/store';

import {
    Route,
    Switch
} from 'react-router-dom';
import {
    ConnectedRouter
} from 'connected-react-router';
import store from './store/store';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
/**
 * Components
 */

import App from './components/app';
import Welcome from './WelcomePage/welcomePage';

// const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
       {/* <ConnectedRouter history={history}> */}
               <App>
                    <Switch>
                        {/* <Route 
                            exact 
                            path="/MatchA"
                            render={()=>(<div><img src={Picture}/></div>)}/> */}
                        {/* <Route 
                            exact 
                            path="/MatchA"
                            component={App}/>
                        <Route 
                            exact 
                            path="/MatchB"
                            component={Welcome}/> */}
                    </Switch>
                </App>    
       {/* </ConnectedRouter> */}
    </Provider>,
   document.getElementById('app')
);


// const routing = (
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/Welcome" component={Welcome} />
//       </div>
//     </Router>
//   )
//   ReactDOM.render(routing, document.getElementById('root'))
