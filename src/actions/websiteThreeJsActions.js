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

export function initFeedbacks(array, arrayToShow) {
    return { 
        type: actionTypes.INIT_FEEDBACKS,
        array: array,
        arrayToShow: arrayToShow
    };
};

export function leftArrowOnClick() {
    return { 
        type: actionTypes.LEFT_ARROW_ON_CLICK
    };
};

export function rightArrowOnClick() {
    return { 
        type: actionTypes.RIGHT_ARROW_ON_CLICK
    };
};
