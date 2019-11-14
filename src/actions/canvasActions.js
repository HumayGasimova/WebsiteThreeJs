import * as actionTypes from '../constants/actionTypes';

export function moveCircleXCoordinate(x) {
    return { 
        type: actionTypes.MOVE_CIRCLE_X_COORDINATE,
        dx: x
    };
};

export function moveCircleYCoordinate(y) {
    return { 
        type: actionTypes.MOVE_CIRCLE_Y_COORDINATE,
        dy: y
    };
};

export function changeDirectionOfXMove() {
    return { 
        type: actionTypes.CHANGE_DIRECTION_OF_X_MOVE
    };
};

export function changeDirectionOfYMove() {
    return { 
        type: actionTypes.CHANGE_DIRECTION_OF_Y_MOVE
    };
};

