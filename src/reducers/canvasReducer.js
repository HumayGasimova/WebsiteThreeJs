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
   dx: 3,
   y: 200,
   dy: 3
}

const moveCircleXCoordinate = (state, action) => {
    return updateObject(state, {
        x: state.x + action.dx
    });
}

const moveCircleYCoordinate = (state, action) => {
    return updateObject(state, {
        y: state.y + action.dy
    });
}

const changeDirectionOfXMove = (state) => {
    return updateObject(state, {
        dx: -state.dx
    });
}

const changeDirectionOfYMove = (state) => {
    return updateObject(state, {
        dy: -state.dy
    });
}

const updateCoordinates = (state, action) => {
    return updateObject(state, {
        x: action.x,
        y: action.y
    });
}

const updateVelocities = (state, action) => {
    return updateObject(state, {
        dx: action.dx,
        dy: action.dy
    });
}



const canvasReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOVE_CIRCLE_X_COORDINATE:
            return moveCircleXCoordinate(state, action);
        case actionTypes.MOVE_CIRCLE_Y_COORDINATE:
            return moveCircleYCoordinate(state, action);
        case actionTypes.CHANGE_DIRECTION_OF_X_MOVE:
            return changeDirectionOfXMove(state, action);
        case actionTypes.CHANGE_DIRECTION_OF_Y_MOVE:
            return changeDirectionOfYMove(state, action);
        case actionTypes.UPDATE_COORDINATES:
            return updateCoordinates(state, action);
        case actionTypes.UPDATE_VELOCITIES:
            return updateVelocities(state, action);
        default: 
            return state;
    }
}

export default canvasReducer;
