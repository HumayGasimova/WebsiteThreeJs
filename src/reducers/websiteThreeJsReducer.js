/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as utility from "../utility";

/**
* Initial State
*/

export const initialState = {
    menuButtonIsPressed: false,
    feedbacks: [],
    feedbacksToShow: [],
    dots: []
}

const toggleMenuButton = (state) => {
    return {
        ...state,
        menuButtonIsPressed: !state.menuButtonIsPressed
    };
}

const menuButtonIsToggled = (state, action) => {
    return {
        ...state,
        menuButtonIsPressed: action.val
    };
}

const initFeedbacks = (state, action) => {
    let updatedDots =  utility.getArrayOfDots(action.array.length);
   
    return {
        ...state,
        feedbacks: action.array,
        feedbacksToShow: action.arrayToShow,
        dots: updatedDots
    };
}

const leftArrowOnClick = (state, action) => {
    let updatedFeedbacksToShow = [...state.feedbacksToShow];
    let updatedDots = [... state.dots];

    let firstFeedbackId = updatedFeedbacksToShow[0].id;
    let feedbackToAdd = state.feedbacks[state.feedbacks.findIndex(x => x.id === firstFeedbackId) - 1];
    updatedFeedbacksToShow.pop();

    if(state.feedbacks[0].id === firstFeedbackId){
        feedbackToAdd = state.feedbacks[state.feedbacks.length - 1];
        updatedFeedbacksToShow.unshift(feedbackToAdd);
    }else{
        updatedFeedbacksToShow.unshift(feedbackToAdd);
    }

    let previousDotId = updatedDots.findIndex(x => x.chosen === true);
    let previousDot = {...updatedDots.find(x => x.chosen === true), chosen: false};
    updatedDots.splice(previousDotId, 1, previousDot);

    let nextDotId = updatedFeedbacksToShow[0].id;
    let nextDot = {...updatedDots.find(x => x.id === nextDotId), chosen: true};
    updatedDots.splice(nextDotId - 1, 1, nextDot);

    return {
        ...state,
        feedbacksToShow: updatedFeedbacksToShow,
        dots: updatedDots
    };
}

const rightArrowOnClick = (state, action) => {
    let updatedFeedbacksToShow = [...state.feedbacksToShow];
    let updatedDots = [... state.dots];

    let lastFeedbackId = updatedFeedbacksToShow[updatedFeedbacksToShow.length-1].id;
    let feedbackToAdd = state.feedbacks[state.feedbacks.findIndex(x => x.id === lastFeedbackId) + 1];
    updatedFeedbacksToShow.shift();

    if(state.feedbacks.includes(feedbackToAdd)){
        updatedFeedbacksToShow.push(feedbackToAdd);
    }else{
        feedbackToAdd = state.feedbacks[0];
        updatedFeedbacksToShow.push(feedbackToAdd);
    }

    let previousDotId = updatedDots.findIndex(x => x.chosen === true);
    let previousDot = {...updatedDots.find(x => x.chosen === true), chosen: false};
    updatedDots.splice(previousDotId, 1, previousDot);

    let nextDotId = updatedFeedbacksToShow[0].id;
    let nextDot = {...updatedDots.find(x => x.id === nextDotId), chosen: true};
    updatedDots.splice(nextDotId - 1, 1, nextDot);
 
    return {
        ...state,
        feedbacksToShow: updatedFeedbacksToShow,
        dots: updatedDots
    };
}

const chooseDotOnScroll = (state, action) => {
    let updatedDots =  [...state.dots];
    let previousDot = {...updatedDots.find(x => x.chosen === true), chosen: false};
    let previousDotIndex = updatedDots.findIndex(x => x.chosen === true);

    updatedDots.splice(previousDotIndex, 1, previousDot);

    let nextDot = {...updatedDots.find(x => x.id === action.id), chosen: true};
    let nextDotIndex = updatedDots.findIndex(x => x.id === action.id);

    updatedDots.splice(nextDotIndex, 1, nextDot);

    return {
        ...state,
        dots: updatedDots
    };
}

const websiteThreeJsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
        case actionTypes.MENU_BUTTON_IS_TOGGLED:
            return menuButtonIsToggled(state, action);
        case actionTypes.INIT_FEEDBACKS:
            return initFeedbacks(state, action);
        case actionTypes.LEFT_ARROW_ON_CLICK:
            return leftArrowOnClick(state, action);
        case actionTypes.RIGHT_ARROW_ON_CLICK:
            return rightArrowOnClick(state, action);
        case actionTypes.CHOOSE_DOT_ON_SCROLL:
            return chooseDotOnScroll(state, action);
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
