import * as actionTypes from '../constants/actionTypes';

const initialState = {
    winner: null,
    winnerLine: [],
    draw: false,
    counterX: 0,
    counterY: 0
};

function winner (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_WINNER:
            return {
                ...state,
                winner: action.winner
            }
        
    }
        return state;
}

export default winner;