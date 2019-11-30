import * as actionTypes from '../constants/actionTypes';

export function toggleMenuButton(val) {
    return { 
        type: actionTypes.TOGGLE_MENU_BUTTON,
        val: val
    };
};
