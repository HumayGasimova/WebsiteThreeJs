/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Constants
*/

import {
    updateObject
} from './utility';

/**
* Initial State
*/

export const initialState = {
    mousePressed: false
}

const mouseDown = (state, action) => {
    return updateObject(state, {
        mousePressed: action.val
    });
}



const paintReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOUSE_DOWN:
            return mouseDown(state, action);
  
        default: 
            return state;
    }
}

export default paintReducer;
