import * as actionTypes from '../constants/actionTypes';


const initialState = {
    mainBox: ['','','',
             '','','',
             '','','']
};

function updateBox (state = initialState, action){
    switch(action.type){
        case actionTypes.UPDATE_BOX:
            const newState = Object.assign({}, state);
            newState.mainBox[action.i] = action.player
        return newState
    }
        return state;
}

export default updateBox;