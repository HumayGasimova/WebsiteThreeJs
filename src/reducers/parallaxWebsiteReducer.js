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
   menuButtonIsPressed: false,
   sidebarOnInit: false
}

const toggleMenuButton = (state, action) => {
    return updateObject(state, {
        menuButtonIsPressed: !state.menuButtonIsPressed,
        sidebarOnInit: true
    });
}

const menuButtonIsToggled = (state, action) => {
    return updateObject(state, {
        menuButtonIsPressed: action.val
    });
}


const parallaxWebsiteReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
        case actionTypes.MENU_BUTTON_IS_TOGGLED:
            return menuButtonIsToggled(state, action);
        default: 
            return state;
    }
}

export default parallaxWebsiteReducer;
