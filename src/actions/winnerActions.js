import * as actionTypes from '../constants/actionTypes';

export function setWinner(winner){
    return {
        type: actionTypes.SET_WINNER,
        winner: winner
    }
};


