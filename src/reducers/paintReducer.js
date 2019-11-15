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
    mousePressed: false,
    color: 'black',
    lastX: 0,
    lastY: 0,
    x: 0,
    y: 0
}

const mouseDown = (state, action) => {
    return updateObject(state, {
        mousePressed: action.val
    });
}

const getColor = (state, action) => {
    return updateObject(state, {
        color: action.color
    });
}

const captureLastXY = (state, action) => {
    return updateObject(state, {
        lastX: action.lastX,
        lastY: action.lastY
    });
}

const captureXY = (state, action) => {
    return updateObject(state, {
        x: action.x,
        y: action.y
    });
}

const paintReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOUSE_DOWN:
            return mouseDown(state, action);
        case actionTypes.GET_COLOR:
            return getColor(state, action);
        case actionTypes.CAPTURE_LAST_X_Y:
            return captureLastXY(state, action);
        case actionTypes.CAPTURE_X_Y:
            return captureXY(state, action);
        default: 
            return state;
    }
}

export default paintReducer;
