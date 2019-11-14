import * as actionTypes from '../constants/actionTypes';

export function moveCircle(val) {
    return { 
        type: actionTypes.MOVE_CIRCLE,
        val: val
    };
};

