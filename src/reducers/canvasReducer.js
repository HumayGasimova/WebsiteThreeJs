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
   x: 200,
   dx: 3
}

const moveCircle = (state, action) => {
    return updateObject(state, {
        x: state.x + action.val
    });
}

const changeDirectionOfMove = (state) => {
    return updateObject(state, {
        dx: -state.dx
    });
}


const canvasReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOVE_CIRCLE:
            return moveCircle(state, action);
        case actionTypes.CHANGE_DIRECTION_OF_MOVE:
            return changeDirectionOfMove(state, action);
     
        
        default: 
            return state;
    }
}

export default canvasReducer;
