import * as actionTypes from '../constants/actionTypes';
import {
    updateObject
} from './utility';

const initialState = {
    firstPlayer: null,
    dash: "-"
};

function setPlayer (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_X_PLAYER:
            return updateObject(state, {
                firstPlayer: "X",
                dash: null
            });
        case actionTypes.SET_O_PLAYER:
            return updateObject(state,{
                firstPlayer: "O",
                dash: null
            });
        case actionTypes.UPDATE_PLAYER:
            return updateObject(state, {firstPlayer: state.firstPlayer === "X" ? "O" : "X"});
        case actionTypes.RESET_PLAYER:
            return updateObject(state, {firstPlayer: null});
        default:
            return state;
    }
}

// export default (history) => combineReducers({
//     router: connectRouter(history),
//     rootReducer
// });
export default setPlayer;