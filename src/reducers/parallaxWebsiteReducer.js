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
   sidebarOnInit: false,
   services: ['','']
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

const initServices = (state, action) => {
    return updateObject(state, {
        services: action.array
    });
}

const showCard = (state, action) => {
    let updatedServices = [...state.services];
    let service = updatedServices.find(x => x.cardId === action.val);
    let updatedService = {...service, show: true};

    let serviceIndex = updatedServices.findIndex(x => x.cardId === action.val);

    updatedServices.splice(serviceIndex, 1, updatedService);
    return updateObject(state, {
        services: updatedServices
    });
}

const parallaxWebsiteReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
        case actionTypes.MENU_BUTTON_IS_TOGGLED:
            return menuButtonIsToggled(state, action);
        case actionTypes.INIT_SERVICES:
            return initServices(state, action);
        case actionTypes.SHOW_CARD:
            return showCard(state, action); 
        default: 
            return state;
    }
}

export default parallaxWebsiteReducer;
