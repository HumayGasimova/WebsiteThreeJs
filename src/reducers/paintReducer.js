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
    bgColor: "white",
    lastX: 0,
    lastY: 0,
    x: 0,
    y: 0,
    colorPickerIsShown: false,
    buttonsName: '',
    activeToolButton: 'pencil',
    sizePencil: 10,
    sizeEraser: 10,
    canvasWidth: 1536,
    canvasHeight: 754 
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

const toggleColorPicker = (state, action) => {
    return updateObject(state, {
       colorPickerIsShown: action.val
    });
}

const getBgColor = (state, action) => {
    return updateObject(state, {
        bgColor: action.color
    });
}

const whichButton = (state, action) => {
    return updateObject(state, {
        buttonsName: action.name
    });
}

const chooseTool = (state, action) => {
    return updateObject(state, {
        activeToolButton: action.tool
    });
}

const getSize = (state, action) => {
    switch(action.tool){
        case "pencil":
            return updateObject(state, {
                sizePencil: +action.val
            });
        case "eraser":
            return updateObject(state, {
                sizeEraser: +action.val
            });
    }
   
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
        case actionTypes.TOGGLE_COLOR_PICKER:
            return toggleColorPicker(state, action);
        case actionTypes.GET_BG_COLOR:
            return getBgColor(state, action);
        case actionTypes.WHICH_BUTTON:
            return whichButton(state, action);
        case actionTypes.CHOOSE_TOOL:
            return chooseTool(state, action);
        case actionTypes.GET_SIZE:
            return getSize(state, action);
        default: 
            return state;
    }
}

export default paintReducer;
