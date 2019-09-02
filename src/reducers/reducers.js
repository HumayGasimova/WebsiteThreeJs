import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import generalReducer from './generalReducer';
import businessReducer from './businessReducer';
import pingReducer from './exEpicReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    // general: generalReducer,
    business: businessReducer,
    epic: pingReducer
});
