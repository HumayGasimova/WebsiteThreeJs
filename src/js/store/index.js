import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from '../reducers/index';
import {
    forbiddenWordsMiddleware
} from '../middleware';
import {
    createBrowserHistory
} from 'history';
import {
    routerMiddleware
} from 'connected-react-router';

export const history = createBrowserHistory();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose;

export default function configureStore(preloadedState){
    const store = createStore(
        rootReducer(history),
        preloadedState,
        storeEnhancers(applyMiddleware(
            routerMiddleware(history),
            forbiddenWordsMiddleware)
        )
    );

    return store
};