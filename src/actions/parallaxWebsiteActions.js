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

export function feedbackOnChange() {
    return { 
        type: actionTypes.FEEDBACK_ON_CHANGE
    };
};

export function dotOnChange() {
    return { 
        type: actionTypes.DOTS_ON_CHANGE
    };
};

export function startChangingFeedbacks(dotId, feedbackIndex) {
    return { 
        type: actionTypes.START_CHANGING_FEEDBACKS,
        dotId: dotId,
        feedbackIndex: feedbackIndex
    };
};

export function stopChangingFeedbacks() {
    return { 
        type: actionTypes.STOP_CHANGING_FEEDBACKS
    };
};

export function activateIcon(id) {
    return { 
        type: actionTypes.ACTIVATE_ICON,
        id: id
    };
};

export function imageOnClick(val, id) {
    return { 
        type: actionTypes.IMAGE_ON_CLICK,
        val: val,
        id: id
    };
};

export function nextImage(id) {
    return { 
        type: actionTypes.NEXT_IMAGE,
        id: id
    };
};

export function previousImage(id) {
    return { 
        type: actionTypes.PREVIOUS_IMAGE,
        id: id
    };
};

export function submitMessage(name, email, contact, company, message) {
    return { 
        type: actionTypes.SUBMIT_MESSAGE,
        name: name,
        email: email,
        contact: contact,
        company: company,
        message: message
   };
};

export function messageToSend(obj) {
    return { 
        type: actionTypes.MESSAGE_TO_SEND,
        obj: obj
   };
};
