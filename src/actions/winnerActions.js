import * as actionTypes from '../constants/actionTypes';

export function setWinner (winner, list){
    return {
        type: actionTypes.SET_WINNER,
        winner: winner,
        winnerLine: list
    }
};

export function draw (){
    return {
        type: actionTypes.DRAW
    }
};

export function resetGame (){
    return {
        type: actionTypes.RESET_GAME
    }
};


