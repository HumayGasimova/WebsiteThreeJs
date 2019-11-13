/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Constants
*/

import {
    updateObject
} from './utility';

import * as Utility from '../utility';

/**
* Initial State
*/

export const initialState = {
   
}

// const makePaperclip = (state) => {
//     let updateWire = +state.wire >= 1 ? +state.wire - 1 : 0   // 500 pomenat na 1
//     return updateObject(state, {
//        paperClips: state.paperClips + 1, //pomenat na 1
//        unsoldInventory: +state.unsoldInventory + 1,
//        wire: +updateWire.toFixed(2)
//     });
// }


const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHECK_BUTTONS:
            return state;
        // case actionTypes.MAKE_PAPERCLIP:
        //     return makePaperclip(state, action);
        
        default: 
            return state;
    }
}

export default businessReducer;
