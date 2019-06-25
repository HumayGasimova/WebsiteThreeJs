import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from '../reducers/setPlayerReducer';
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

// const middleware = [thunk];

const logger = createLogger({
    collapsed: true
});

const middleware = [thunk];

if (process.env.ENVIRONMENT !== 'production') {
    middleware.push(logger);
}

export default createStore(rootReducer, applyMiddleware(logger));


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