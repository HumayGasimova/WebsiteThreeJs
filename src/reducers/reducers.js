import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import canvasReducer from './canvasReducer';
import paintReducer from './paintReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    canvas: canvasReducer,
    paint: paintReducer
});
