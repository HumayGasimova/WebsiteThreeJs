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

export function initServices(array) {
    return { 
        type: actionTypes.INIT_SERVICES,
        array: array
    };
};

export function showCard(val) {
    return { 
        type: actionTypes.SHOW_CARD,
        val: val
    };
};

export function initTeamMembers(array) {
    return { 
        type: actionTypes.INIT_TEAM_MEMBERS,
        array: array
    };
};

export function initImages(array) {
    return { 
        type: actionTypes.INIT_IMAGES,
        array: array
    };
};

export function imageHover(id, val) {
    return { 
        type: actionTypes.IMAGE_HOVER,
        id: id,
        val: val
    };
};
