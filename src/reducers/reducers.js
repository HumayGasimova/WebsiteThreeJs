import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import paintReducer from './paintReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    paint: paintReducer
});
