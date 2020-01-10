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
    let updatedFeedbacksToShow =  [...state.feedbacksToShow];
    let firstFeedbackId = updatedFeedbacksToShow[0].id;
    let feedbackToAdd = state.feedbacks[state.feedbacks.findIndex(x => x.id === firstFeedbackId) - 1];
    console.log(state.feedbacks.includes(feedbackToAdd))
    updatedFeedbacksToShow.pop();
    console.log(state.feedbacks[0].id, firstFeedbackId)
    if(state.feedbacks[0].id === firstFeedbackId){
        feedbackToAdd = state.feedbacks[state.feedbacks.length - 1];
        updatedFeedbacksToShow.unshift(feedbackToAdd);
    }else{
        updatedFeedbacksToShow.unshift(feedbackToAdd);
    }
    return {
        ...state,
        feedbacksToShow: updatedFeedbacksToShow,
    };
}

const rightArrowOnClick = (state, action) => {
    let updatedFeedbacksToShow =  [...state.feedbacksToShow];
    let lastFeedbackId = updatedFeedbacksToShow[updatedFeedbacksToShow.length-1].id;
    let feedbackToAdd = state.feedbacks[state.feedbacks.findIndex(x => x.id === lastFeedbackId) + 1];
    console.log(state.feedbacks.includes(feedbackToAdd))
    updatedFeedbacksToShow.shift();
    if(state.feedbacks.includes(feedbackToAdd)){
        updatedFeedbacksToShow.push(feedbackToAdd);
    }else{
        feedbackToAdd = state.feedbacks[0];
        updatedFeedbacksToShow.push(feedbackToAdd);
    }
    return {
        ...state,
        feedbacksToShow: updatedFeedbacksToShow,
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
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
