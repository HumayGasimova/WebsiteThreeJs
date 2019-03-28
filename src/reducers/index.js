import {
    TEST_TYPE
} from '../constants/action-types';
import {
    combineReducers
} from 'redux';
import {
    connectRouter
} from 'connected-react-router';



const initialState = {
    articles:[]
};

function rootReducer (state = initialState, action){
    if(action.type === TEST_TYPE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default (history) => combineReducers({
    router: connectRouter(history),
    rootReducer
});