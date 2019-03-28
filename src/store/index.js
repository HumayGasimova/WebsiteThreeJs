import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from '../reducers/index';
import {
    createBrowserHistory
} from 'history';
import {
    routerMiddleware
} from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore(preloadedState){
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(applyMiddleware(
            routerMiddleware(history))
        )
    );
    return store
};