import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import parallaxWebsiteReducer from './parallaxWebsiteReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    home: parallaxWebsiteReducer
});
