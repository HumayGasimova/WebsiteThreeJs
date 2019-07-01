import * as actionTypes from '../constants/actionTypes';
import {
    updateObject
} from './utility';

const initialState = {
    winner: null,
    winnerLine: [],
    draw: false
};

function winner (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_WINNER:
            return updateObject(state, {
                winner: action.winner,
                winnerLine: action.winnerLine
            });
        case actionTypes.DRAW:
            return updateObject(state, {
                draw: true,
                winner: "No One"
            });
        case actionTypes.RESET_GAME:
            return updateObject(state, {
                winner: null,
                winnerLine: [],
                draw: false
            });
        default:
            return state;
    }
}

export default winner;