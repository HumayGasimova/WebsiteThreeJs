import * as actionTypes from '../constants/actionTypes';
import {
    combineReducers
} from 'redux';
import {
    connectRouter
} from 'connected-react-router';



const initialState = {
    firstPlayer: null,
    dash: "-"
};

function setPlayer (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_X_PLAYER:
            return {
                firstPlayer: "X",
                dash: null
            }
        case actionTypes.SET_O_PLAYER:
            return {
                firstPlayer: "O",
                dash: null
            }
        }
        return state;
}

// export default (history) => combineReducers({
//     router: connectRouter(history),
//     rootReducer
// });
export default setPlayer;