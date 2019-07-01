import * as actionTypes from '../constants/actionTypes';
import {
    updateObject
} from './utility';

const initialState = {
    sideDrawerOpen: ""
};

function sideDrawerHandler (state = initialState, action){
    switch(action.type){
        case actionTypes.SIDE_DRAWER_IS_OPEN:
            return updateObject(state, {sideDrawerOpen: action.option});
        default:
             return state;
    }
}


export default sideDrawerHandler;