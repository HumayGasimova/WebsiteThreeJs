import * as actionTypes from '../constants/actionTypes';

const initialState = {
    winner: null,
    winnerLine: [],
    draw: false
};

function winner (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_WINNER:
            return {
                ...state,
                winner: action.winner,
                winnerLine: action.winnerLine
            }
        
    }
        return state;
}

export default winner;