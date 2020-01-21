/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Utility
*/

import * as Utility from "../utility";
import uuid from "uuid";

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
    singlePortfolio: {},
    leaveCommentForm: []
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
    let updatedDots =  Utility.getArrayOfDots(action.array.length);
   
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

const loadSinglePortfolio = (state, action) => {
    return {
        ...state,
        singlePortfolio: action.obj
    };
}

const initLeaveCommentForm = (state, action) => {
    return {
        ...state,
        leaveCommentForm: action.array
    };
}

const setInputFiledValueAndCheckValidation = (state, action) => {
    let updatedInputFieldArray = [...action.array];
    let inputField = updatedInputFieldArray.find(x => x.id === action.inputFieldId);
    let inputFieldIndex = updatedInputFieldArray.findIndex(x => x.id === action.inputFieldId);
    inputField = {
        ...inputField, 
        value: action.event.target.value,
        validation: Utility.checkValidity(action.event.target.value, inputField.validation),
        touched: true
    };

    inputField = {
        ...inputField, 
        errorMessage: Utility.errorMessages(inputField.inputFieldName, inputField.validation),
        validField: Utility.checkValidityOfField(inputField.validation),
    }
   
    updatedInputFieldArray.splice(inputFieldIndex, 1, inputField)

    return {
        ...state,
        leaveCommentForm: updatedInputFieldArray
    };
}

const postComment = (state, action) => {
    let updatedSinglePortfolio = {...state.singlePortfolio};
    let updatedLeaveCommentForm = [...state.leaveCommentForm];
    let checkIfFormIsValid = state.leaveCommentForm.map(el => el.validField === true);
    if(checkIfFormIsValid.every(x => x === true)){
        let comment = {
            id: uuid(),
            image: "Name1",
            fullName: `${state.leaveCommentForm.find(x => x.inputFieldName === "First Name").value} ${state.leaveCommentForm.find(x => x.inputFieldName === "Last Name").value}`,
            date: Utility.getCurrentDateAndTime(),
            comment: state.leaveCommentForm.find(x => x.inputFieldName === "Comment").value,
        }
        updatedSinglePortfolio.comments.array.push(comment);
        updatedLeaveCommentForm = updatedLeaveCommentForm.map(el => {return {...el, value: ''}})
    }else{
        updatedLeaveCommentForm = updatedLeaveCommentForm.map((el, i) => {
            return {
                    ...el, 
                    touched: true,
                    errorMessage: ["Fill the field"]
                }
                
        })
        console.log(updatedLeaveCommentForm)
    }
    
    return {
        ...state,
        singlePortfolio: updatedSinglePortfolio,
        leaveCommentForm: updatedLeaveCommentForm
    }; 
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
        case actionTypes.START_CHOOSING_PORTFOLIO_PAGE_ON_ARROW_BUTTON:
            return state; 
        case actionTypes.START_CHOOSING_PORTFOLIO_SINGLE_PAGE_ON_ARROW_BUTTON:
            return state; 
        case actionTypes.UPDATE_PAGING:
            return updatePaging(state, action); 
        case actionTypes.UPDATE_PORTFOLIO:
            return updatePortfolio(state, action); 
        case actionTypes.DISABLE_PAGINATION_ARROW_BUTTON:
            return disablePaginationArrowButton(state, action); 
        case actionTypes.START_INIT_PORTFOLIO_SINGLE:
            return state; 
        case actionTypes.LOAD_SINGLE_PORTFOLIO:
            return loadSinglePortfolio(state, action); 
        case actionTypes.START_SHOWING_COMMENT_INPUT_AREA:
            return state;    
        case actionTypes.START_ADDING_REPLY:
            return state;
        case actionTypes.INIT_LEAVE_COMMENT_FORM:
            return initLeaveCommentForm(state, action); 
        case actionTypes.SET_INPUT_FIELD_VALUE_AND_CHESCK_VALIDATION:
            return setInputFiledValueAndCheckValidation(state, action); 
        case actionTypes.POST_COMMENT:
            return postComment(state, action);     
        // case actionTypes.CHOOSE_FEEDBACK:
        //     return chooseFeedback(state, action);     
        default: 
            return state;
    }
}

export default websiteThreeJsReducer;
