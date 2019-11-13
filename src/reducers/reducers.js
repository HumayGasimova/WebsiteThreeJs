import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import businessReducer from './businessReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    business: businessReducer
});
