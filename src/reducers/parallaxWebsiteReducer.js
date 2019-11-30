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
   menuButtonIsPressed: false
}

const toggleMenuButton = (state, action) => {
    return updateObject(state, {
        menuButtonIsPressed: action.val
    });
}



const parallaxWebsiteReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
      
        default: 
            return state;
    }
}

export default parallaxWebsiteReducer;
