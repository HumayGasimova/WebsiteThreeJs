import {
    TEST_TYPE
} from '../constants/action-types';

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

export default rootReducer;