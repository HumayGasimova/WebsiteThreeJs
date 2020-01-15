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
    dots: [],
    portfolio: [],
    feedbacksOnScroll: false,
    paging: [],
    padinationArrowLeft: true,
    padinationArrowRight: false,
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

const updateFeedbackCardStyle = (state, action) => {
    let updatedFeedbacksStyle = {...state.feedbacksStyle};
    updatedFeedbacksStyle[action.cardId] = action.className;
    

    return {
        ...state,
        feedbacksStyle: updatedFeedbacksStyle
    };
}

const feedbacksUpdated = (state, action) => {
    return {
        ...state,
        feedbacksOnScroll: action.val
    };
}

const feedbacksStylesUpdated = (state, action) => {
    let updatedFeedbacksStyle = {...state.feedbacksStyle};
    updatedFeedbacksStyle[action.id].left = action.val;
    return {
        ...state,
        feedbacksStyle: updatedFeedbacksStyle
    };
}

const initPortfolio = (state, action) => {
    return {
        ...state,
        portfolio: action.array
    };
}

const initPagination = (state, action) => {
    return {
        ...state,
        paging: action.array
    };
}

const choosePage = (state, action) => {
    let updatedPaging = [...state.paging];
    updatedPaging = updatedPaging.map((el, i) => {
        return {...el, chosen: false}
    })
    let chosenPage = {...updatedPaging.find(x => x.id === action.id), chosen: true};
    let chosenPageIndex = updatedPaging.findIndex(x => x.id === action.id);

    updatedPaging.splice(chosenPageIndex, 1, chosenPage)

    return {
        ...state,
        paging: updatedPaging
    };
}

const loadPortfolioAccordingToPage = (state, action) => {
    return {
        ...state,
        portfolio: action.array
    };
}

const updatePaging = (state, action) => {
    return {
        ...state,
        paging: action.array
    };
}

const updatePortfolio = (state, action) => {
    return {
        ...state,
        portfolio: action.array
    };
}

const disablePaginationArrowButton = (state, action) => {
    switch(action.direction){
        case 'arrowLeft':
            let updatedPaginationArrowLeft;
            if(state.paging[0].chosen){
                updatedPaginationArrowLeft = true;
            }else{
                updatedPaginationArrowLeft = false;
            }
            return {
                ...state,
                padinationArrowLeft: updatedPaginationArrowLeft
            };
        case 'arrowRight':
            let updatedPaginationArrowRight;
            if(state.paging[state.paging.length - 1].chosen){
                updatedPaginationArrowRight = true;
            }else{
                updatedPaginationArrowRight = false;
            }
            return {
                ...state,
                padinationArrowRight: updatedPaginationArrowRight
            };
            default:
                return state;
    }
}

// const chooseFeedback = (state, action) => {
    // let updatedDots = [...state.dots];
    // let previousDotIndex = updatedDots.findIndex(x => x.chosen === true);
    // let previousDot = { ...updatedDots.find(x => x.chosen === true), chosen: false};
    // updatedDots.splice(previousDotIndex, 1, previousDot);

    // let nextDotIndex = updatedDots.findIndex(x => x.id === action.dotId);
    // let nextDot = { ...updatedDots.find(x => x.id === action.dotId), chosen: true}
    // updatedDots.splice(nextDotIndex, 1, nextDot);

    // let updatedFeedbacksToShow = [...state.feedbacksToShow];
    // let firstElementsOfArray = updatedFeedbacksToShow.slice(0, action.dotId - 2);
    // updatedFeedbacksToShow.splice(0, action.dotId - 2);
    // updatedFeedbacksToShow.push(...firstElementsOfArray);
    // return {
    //     ...state,
    //     feedbacksToShow: updatedFeedbacksToShow,
    //     dots: updatedDots
    // };
// }

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
        case actionTypes.START_ADDING_CLASSNAME_TO_FEEDBACK_CARD:
            return state;
        case actionTypes.UPDATE_FEEDBACK_CARD_STYLE:
            return updateFeedbackCardStyle(state, action); 
        case actionTypes.FEEDBACKS_UPDATED:
            return feedbacksUpdated(state, action);   
        case actionTypes.FEEDBACKS_STYLES_UPDATED:
            return feedbacksStylesUpdated(state, action);   
        case actionTypes.INIT_PORTFOLIO:
            return initPortfolio(state, action);   
        case actionTypes.INIT_PAGINATION:
            return initPagination(state, action);  
        case actionTypes.CHOOSE_PAGE:
            return choosePage(state, action); 
        case actionTypes.LOAD_PORTFOLIO_ACCORDING_TO_PAGE:
            return loadPortfolioAccordingToPage(state, action); 
        case actionTypes.START_CHOOSING_PAGE_ON_ARROW_BUTTON:
            return state; 
        case actionTypes.UPDATE_PAGING:
            return updatePaging(state, action); 
        case actionTypes.UPDATE_PORTFOLIO:
            return updatePortfolio(state, action); 
        case actionTypes.DISABLE_PAGINATION_ARROW_BUTTON:
            return disablePaginationArrowButton(state, action); 
        // case actionTypes.CHOOSE_FEEDBACK:
        //     return chooseFeedback(state, action);     
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
