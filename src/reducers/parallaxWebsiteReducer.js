/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

import {
    updateObject
} from './utility';

/**
* Initial State
*/

export const initialState = {
   
}

// const mouseDown = (state, action) => {
//     return updateObject(state, {
//         mousePressed: action.val
//     });
// }



const parallaxWebsiteReducer = (state = initialState, action) => {
    switch(action.type){
        // case actionTypes.MOUSE_DOWN:
        //     return mouseDown(state, action);
      
        default: 
            return state;
    }
}

export default parallaxWebsiteReducer;
