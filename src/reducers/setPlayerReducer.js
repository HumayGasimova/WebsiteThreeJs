import * as actionTypes from '../constants/actionTypes';

const initialState = {
    firstPlayer: null,
    dash: "-"
};

function setPlayer (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_X_PLAYER:
            return {
                ...state,
                firstPlayer: "X",
                dash: null
            }
        case actionTypes.SET_O_PLAYER:
            return {
                ...state,
                firstPlayer: "O",
                dash: null
            }
        case actionTypes.UPDATE_PLAYER:
            return {
                ...state,
                firstPlayer: state.firstPlayer === "X" ? "O" : "X"
            }
        case actionTypes.RESET_PLAYER:
                return {
                    ...state,
                    firstPlayer: null
                }
    }
        return state;
}

// export default (history) => combineReducers({
//     router: connectRouter(history),
//     rootReducer
// });
export default setPlayer;