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

export function chooseDotOnScroll(id) {
    return { 
        type: actionTypes.CHOOSE_DOT_ON_SCROLL,
        id: id
    };
};

export function startAddingClassNameToFeedbackCard(id, update) {
    return { 
        type: actionTypes.START_ADDING_CLASSNAME_TO_FEEDBACK_CARD,
        id: id,
        update: update
    };
};

export function updateFeedbackCardStyle(cardId, str) {
    return { 
        type: actionTypes.UPDATE_FEEDBACK_CARD_STYLE,
        cardId: cardId,
        className: str
    };
};

export function feedbacksUpdated(val) {
    return { 
        type: actionTypes.FEEDBACKS_UPDATED,
        val: val
    };
};

export function feedbacksStylesUpdated(id, val) {
    return { 
        type: actionTypes.FEEDBACKS_STYLES_UPDATED,
        id: id,
        val: val
    };
};

export function chooseFeedback(id) {
    return { 
        type: actionTypes.CHOOSE_FEEDBACK,
        dotId: id
    };
};

export function initPortfolio(array) {
    return { 
        type: actionTypes.INIT_PORTFOLIO,
        array: array
    };
};
