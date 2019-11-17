import * as actionTypes from '../constants/actionTypes';

export function mouseDown(val) {
    return { 
        type: actionTypes.MOUSE_DOWN,
        val
    };
};

export function getColor(color) {
    return { 
        type: actionTypes.GET_COLOR,
        color: color
    };
};

export function captureLastXY(x, y) {
    return { 
        type: actionTypes.CAPTURE_LAST_X_Y,
        lastX: x,
        lastY: y
    };
};

export function captureXY(x, y) {
    return { 
        type: actionTypes.CAPTURE_X_Y,
        x: x,
        y: y
    };
};

export function toggleColorPicker(val) {
    return { 
        type: actionTypes.TOGGLE_COLOR_PICKER,
        val: val
    };
};

export function getBgColor(color) {
    return { 
        type: actionTypes.GET_BG_COLOR,
        color: color
    };
};

export function whichButton(name) {
    return { 
        type: actionTypes.WHICH_BUTTON,
        name: name
    };
};

export function chooseTool(opt) {
    return { 
        type: actionTypes.CHOOSE_TOOL,
        tool: opt
    };
};

export function getSize(option, val) {
    return { 
        type: actionTypes.GET_SIZE,
        tool: option,
        val: val
    };
};
