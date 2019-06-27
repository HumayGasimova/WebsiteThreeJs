import * as actionTypes from '../constants/actionTypes';

export function updateBox (i, player){
    return {
        type: actionTypes.UPDATE_BOX,
        i: i,
        player: player 
    }
};

export function resetMainBox (){
    return {
        type: actionTypes.RESET_MAINBOX,
    }
};

