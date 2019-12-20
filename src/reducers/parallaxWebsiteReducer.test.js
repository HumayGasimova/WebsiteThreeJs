/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './parallaxWebsiteReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './parallaxWebsiteReducer'


describe('parallaxWebsiteReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    it("should update menuButtonIsPressed with opposite boolean value and  set sidebarOnInit to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_MENU_BUTTON
        }
        const initState = {
            ...initialState, 
            menuButtonIsPressed: false,
            sidebarOnInit: false
        }
        const state = {
            ...initialState, 
            menuButtonIsPressed: true,
            sidebarOnInit: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update menuButtonIsPressed with the value passed through the action", () => {
        const action = { 
            type: actionTypes.MENU_BUTTON_IS_TOGGLED,
            val: true
        }
        const initState = {
            ...initialState, 
            menuButtonIsPressed: false
        }
        const state = {
            ...initialState, 
            menuButtonIsPressed: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update services with the array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_SERVICES,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            services: [],
        }
        const state = {
            ...initialState, 
            services: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property show, of the object with property cardId that equal to the val passed through the action in services array, to true", () => {
        const action = { 
            type: actionTypes.SHOW_CARD,
            val: "card2"
        }
        const initState = {
            ...initialState, 
            services: [{cardId: "card1", show: true}, {cardId: "card2", show: false}]
        }
        const state = {
            ...initialState, 
            services: [{cardId: "card1", show: true}, {cardId: "card2", show: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update members with array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_TEAM_MEMBERS,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            members: []
        }
        const state = {
            ...initialState, 
            members: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update images with array passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_IMAGES,
            array: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        const initState = {
            ...initialState, 
            images: []
        }
        const state = {
            ...initialState, 
            images: [{a: 1, b: 2}, {a: 4, b: 5}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update property hover of object in images array with the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMAGE_HOVER,
            id: 1,
            val: true
        }
        const initState = {
            ...initialState, 
            images:  [{id: 1, hover: false}, {id: 2, hover: false}]
        }
        const state = {
            ...initialState, 
            images: [{id: 1, hover: true}, {id: 2, hover: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

     it("should move first elemnt of the feedback array to the end", () => {
        const action = { 
            type: actionTypes.FEEDBACK_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            feedback:  ['My','first', 'feedback']
        }
        const state = {
            ...initialState, 
            feedback:  ['first', 'feedback', 'My']
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.START_CHANGING_FEEDBACKS,
            dotId: 2,
            feedbackIndex: 1
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: false}],
            feedback: ['My','first', 'feedback']
        }
        const state = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}],
            feedback: ['first', 'feedback','My']
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.DOTS_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: true}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: true}, {id: 2, chosen: false}, {id: 3, chosen: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.DOTS_ON_CHANGE
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}, {id: 3, chosen: false}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should set property chosen of the object (which id property equal to dotId(that passed through the action)) in the dots array to true and move all elements of feedback array with index less than feedbackIndex(that passed through the action) to the end of the feedback array", () => {
        const action = { 
            type: actionTypes.STOP_CHANGING_FEEDBACKS
        }
        const initState = {
            ...initialState, 
            dots: [{id: 1, chosen: false}, {id: 2, chosen: true}, {id: 3, chosen: false}]
        }
        const state = {
            ...initialState, 
            dots:  [{id: 1, chosen: false}, {id: 2, chosen: false}, {id: 3, chosen: false}]
        }
        expect(reducer(initState, action)).toEqual(state);
    });

 

});
