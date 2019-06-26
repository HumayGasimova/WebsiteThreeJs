import * as actionTypes from '../constants/actionTypes';

export function setXPlayer (){
    return {
        type: actionTypes.SET_X_PLAYER
    }
};

export function setOPlayer (){
    return {
        type: actionTypes.SET_O_PLAYER
    }
};

export function updatePlayer (){
    return {
        type: actionTypes.UPDATE_PLAYER
    }
};

export function resetPlayer (){
    return {
        type: actionTypes.RESET_PLAYER
    }
};
