import * as actionTypes from '../constants/actionTypes';

export function toggleMenuButton() {
    return { 
        type: actionTypes.TOGGLE_MENU_BUTTON
    };
};

export function menuButtonIsToggled(val) {
    return { 
        type: actionTypes.MENU_BUTTON_IS_TOGGLED,
        val: val
    };
};

export function initFeedbacks(array) {
    return { 
        type: actionTypes.INIT_FEEDBACKS,
        array: array
    };
};
