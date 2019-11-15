import * as actionTypes from '../constants/actionTypes';

export function moveCircleXCoordinate(x, id) {
    return { 
        type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
        dx: x,
        id: id
    };
};

export function moveCircleYCoordinate(y, id) {
    return { 
        type: actionTypes.MOVE_CIRCLE_Y_COORDINATE,
        dy: y,
        id: id
    };
};

export function changeDirectionOfXMove(id) {
    return { 
        type: actionTypes.CHANGE_DIRECTION_OF_X_MOVE,
        id: id
    };
};

export function changeDirectionOfYMove(id) {
    return { 
        type: actionTypes.CHANGE_DIRECTION_OF_Y_MOVE,
        id: id
    };
};

export function updateCoordinates(x, y) {
    return { 
        type: actionTypes.UPDATE_COORDINATES,
        x: x,
        y: y
    };
};

export function updateVelocities(x, y) {
    return { 
        type: actionTypes.UPDATE_VELOCITIES,
        dx: x,
        dy: y
    };
};

export function fillCirclesArray() {
    return { 
        type: actionTypes.FILL_CIRCLES_ARRAY
    };
};

export function updateCirclesArray(arr) {
    return { 
        type: actionTypes.UPDATE_CIRCLES_ARRAY,
        arr: arr
    };
};

export function getNumbersOfBalls(num) {
    return { 
        type: actionTypes.GET_NUMBERS_OF_BALLS,
        num: num
    };
};
