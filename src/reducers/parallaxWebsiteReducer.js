/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Initial State
*/

export const initialState = {
    menuButtonIsPressed: false,
    sidebarOnInit: false,
    services: [],
    members: [],
    images: [],
    feedback: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ],
    dots: [{
        id: 1,
        chosen: false
    },{
        id: 2,
        chosen: false
    },
    {
        id: 3,
        chosen: false
    }],
    activatedIcon: 'home',
    imageIsEnlarged: false,
    imageId: 0,
    disableOnNext: false,
    disableOnPrevious: false,
    messages: []
}

const toggleMenuButton = (state, action) => {
    return {
        ...state,
        menuButtonIsPressed: !state.menuButtonIsPressed,
        sidebarOnInit: true
    };
}

const menuButtonIsToggled = (state, action) => {
    return {
        ...state,
        menuButtonIsPressed: action.val
    };
}

const initServices = (state, action) => {
    return {
        ...state,
        services: action.array
    };
}

const showCard = (state, action) => {
    let updatedServices = [...state.services];
    let service = updatedServices.find(x => x.cardId === action.val);
    let updatedService = {...service, show: true};

    let serviceIndex = updatedServices.findIndex(x => x.cardId === action.val);

    updatedServices.splice(serviceIndex, 1, updatedService);
    return {
        ...state,
        services: updatedServices
    };
}

const initTeamMembers = (state, action) => {
    return {
        ...state,
        members: action.array
    };
}

const initImages = (state, action) => {
    return {
        ...state,
        images: action.array
    };
}

const imageHover = (state, action) => {
    let updatedImages = [...state.images];
    let image = updatedImages.find(x => x.id === action.id);
    let updatedImage = {...image, hover: action.val}
    let imageIndex = updatedImages.findIndex(x => x.id === action.id);
    
    updatedImages.splice(imageIndex, 1, updatedImage);
    
    return {
        ...state,
        images: updatedImages
    };
}

const feedbackOnChange = (state, action) => {
    let updatedFeedback = [...state.feedback];
    let firstElement = updatedFeedback.shift();

    updatedFeedback.push(firstElement);

    return {
        ...state,
        feedback: updatedFeedback
    };
}

const startChangingFeedbacks = (state, action) => {
    let updatedDots = [...state.dots];
    let dot = updatedDots.find(x => x.id === action.dotId);
    let updatedDot = {...dot, chosen: true}
    let dotIndex = updatedDots.findIndex(x => x.id === action.dotId);

    updatedDots.splice(dotIndex, 1, updatedDot);

    let updatedFeedback = [...state.feedback];
    let moveElements = [];
    updatedFeedback.map((el,i) => {
        if(i < action.feedbackIndex){
            moveElements.push(el);
        }
    })
    updatedFeedback.splice(0, action.feedbackIndex);
    updatedFeedback = updatedFeedback.concat(moveElements);

    return {
        ...state,
        dots: updatedDots,
        feedback: updatedFeedback
    };
}

const dotOnChange = (state, action) => {
    let updatedDots = [...state.dots];
    let dot = {...updatedDots.find(x => x.chosen === true), chosen: false};
    let dotIndex = updatedDots.findIndex(x => x.chosen === true);
    updatedDots.splice(dotIndex, 1, dot);
    let nextDot;

    if(dotIndex === updatedDots.length - 1){
        nextDot = {...updatedDots[0], chosen: true};
        updatedDots.splice(0, 1, nextDot);
    }else{
        nextDot = {...updatedDots[dotIndex + 1], chosen: true};
        console.log(nextDot)
        updatedDots.splice(dotIndex + 1, 1, nextDot);
    }
   
    return {
        ...state,
        dots: updatedDots
    };
}

const stopChangingFeedbacks = (state, action) => {
    let updatedDots = [...state.dots];
    let dot = {...updatedDots.find(x => x.chosen === true), chosen: false};
    let dotIndex = updatedDots.findIndex(x => x.chosen === true);
    updatedDots.splice(dotIndex, 1, dot);
   
    return {
        ...state,
        dots: updatedDots
    };
}

const activateIcon = (state, action) => {
    return {
        ...state,
        activatedIcon: action.id
    };
}

const imageOnClick = (state, action) => {
    let updatedDisableOnNext = false;
    let updatedDisableOnPrevious = false;
    if(!action.val){
        updatedDisableOnNext = false;
        updatedDisableOnPrevious = false;
    }
    if(action.val && action.id === 1){
        updatedDisableOnPrevious = true;
    }
    if(action.val && state.images.length === action.id){
        updatedDisableOnNext = true;
    }
    return {
        ...state,
        imageIsEnlarged: action.val,
        imageId: action.id,
        disableOnNext: updatedDisableOnNext,
        disableOnPrevious: updatedDisableOnPrevious
    };
}

const nextImage = (state, action) => {
    let updatedImageId = action.id + 1;
    let updatedDisableOnNext;
    if(state.images.length - 1 === action.id){
        updatedDisableOnNext = true;
    }else{
        updatedDisableOnNext = false;
    }

    return {
        ...state,
        imageId: updatedImageId,
        disableOnNext: updatedDisableOnNext,
        disableOnPrevious: false
    };
}

const previousImage = (state, action) => {
    let updatedImageId = action.id - 1;
    let updatedDisableOnPrevious;
    if(action.id - 1 === 0){
        updatedDisableOnPrevious = true;
    }else{
        updatedDisableOnPrevious = false;
    }

    return {
        ...state,
        imageId: updatedImageId,
        disableOnNext: false,
        disableOnPrevious: updatedDisableOnPrevious
    };
}

const messageToSend = (state, action) => {
    let updatedMessages = [... state.messages];
    updatedMessages.push(action.obj)

    return {
        ...state,
        messages: updatedMessages
    };
}

const parallaxWebsiteReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_MENU_BUTTON:
            return toggleMenuButton(state, action);
        case actionTypes.MENU_BUTTON_IS_TOGGLED:
            return menuButtonIsToggled(state, action);
        case actionTypes.INIT_SERVICES:
            return initServices(state, action);
        case actionTypes.SHOW_CARD:
            return showCard(state, action); 
        case actionTypes.INIT_TEAM_MEMBERS:
            return initTeamMembers(state, action); 
        case actionTypes.INIT_IMAGES:
            return initImages(state, action); 
        case actionTypes.IMAGE_HOVER:
            return imageHover(state, action); 
        case actionTypes.FEEDBACK_ON_CHANGE:
            return feedbackOnChange(state, action); 
        case actionTypes.DOTS_ON_CHANGE:
            return dotOnChange(state, action); 
        case actionTypes.START_CHANGING_FEEDBACKS:
            return startChangingFeedbacks(state, action); 
        case actionTypes.STOP_CHANGING_FEEDBACKS:
            return stopChangingFeedbacks(state, action); 
        case actionTypes.ACTIVATE_ICON:
            return activateIcon(state, action); 
        case actionTypes.IMAGE_ON_CLICK:
            return imageOnClick(state, action); 
        case actionTypes.NEXT_IMAGE:
            return nextImage(state, action); 
        case actionTypes.PREVIOUS_IMAGE:
            return previousImage(state, action); 
        case actionTypes.SUBMIT_MESSAGE:
            return state; 
        case actionTypes.MESSAGE_TO_SEND:
            return messageToSend(state, action); 
        default: 
            return state;
    }
}

export default parallaxWebsiteReducer;
