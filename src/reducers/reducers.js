import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import canvasReducer from './canvasReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    canvas: canvasReducer
});
