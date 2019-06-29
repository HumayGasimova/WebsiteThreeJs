import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';

import {
    createBrowserHistory
} from 'history';

import {
    routerMiddleware
} from 'connected-react-router';

import {
    createLogger
} from 'redux-logger';

import thunk from 'redux-thunk';

import setPlayerReducer from '../reducers/setPlayerReducer';
import mainBoxReducer from '../reducers/mainBoxReducer';
import winnerReducer from '../reducers/winnerReducer';
import sideDrawerReducer from '../reducers/sideDrawerReducer';


const rootReducer = combineReducers({
    setPlayer: setPlayerReducer,
    mainBox: mainBoxReducer,
    gameOver: winnerReducer,
    sideDrawer: sideDrawerReducer
})

// const middleware = [thunk];

const logger = createLogger({
    collapsed: true
});

const middleware = [];

if (process.env.ENVIRONMENT !== 'production') {
    middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(thunk,logger)
));


// export const history = createBrowserHistory();

// export default function configureStore(preloadedState){
//     const store = createStore(
//         rootReducer(history),
//         preloadedState,
//         compose(
//             applyMiddleware(logger, routerMiddleware(history))
//         )
//     );
//     return store
// };