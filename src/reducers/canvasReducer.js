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
    circles: [],
    numberOfBalls: 0
}

const moveCircleXCoordinate = (state, action) => {
    let updatedCircles = [...state.circles];
    let circle = updatedCircles.find(x => x.id === action.id);
    circle.x = circle.x + action.dx;
    updatedCircles.splice(action.id, 1 ,circle);
    // updatedCircles[action.id] = circle
    return updateObject(state, {
        circles: updatedCircles
    });
}

const moveCircleYCoordinate = (state, action) => {
    let updatedCircles = [...state.circles];
    let circle = updatedCircles.find(x => x.id === action.id);
    circle.y = circle.y + action.dy;
    updatedCircles.splice(action.id, 1 ,circle);

    // console.log(updatedCircles)
    return updateObject(state, {
        circles: updatedCircles
    });
}

const changeDirectionOfXMove = (state, action) => {
    let updatedCircles = [...state.circles];
    let circle = updatedCircles.find(x => x.id === action.id);
    circle.dx = -circle.dx;
    updatedCircles.splice(action.id, 1 ,circle);
    return updateObject(state, {
        circles: updatedCircles
    });
}

const changeDirectionOfYMove = (state, action) => {
    let updatedCircles = [...state.circles];
    let circle = updatedCircles.find(x => x.id === action.id);
    circle.dy = -circle.dy;
    updatedCircles.splice(action.id, 1 ,circle);
    return updateObject(state, {
        circles: updatedCircles
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

const updateCirclesArray = (state, action) => {
    return updateObject(state, {
        circles: action.arr
    });
}

const getNumbersOfBalls = (state, action) => {
    return updateObject(state, {
        numberOfBalls: +action.num
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
        case actionTypes.FILL_CIRCLES_ARRAY:
            return state;
        case actionTypes.UPDATE_CIRCLES_ARRAY:
            return updateCirclesArray(state, action);
        case actionTypes.GET_NUMBERS_OF_BALLS:
            return getNumbersOfBalls(state, action);
        default: 
            return state;
    }
}

export default canvasReducer;
