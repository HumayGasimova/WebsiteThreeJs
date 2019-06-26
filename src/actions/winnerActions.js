import * as actionTypes from '../constants/actionTypes';

export function setWinner(winner, list){
    return {
        type: actionTypes.SET_WINNER,
        winner: winner,
        winnerLine: list
    }
};


