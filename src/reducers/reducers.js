import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import generalReducer from './generalReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    general: generalReducer
});
