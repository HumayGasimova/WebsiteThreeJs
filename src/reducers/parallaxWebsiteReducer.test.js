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

    it("should update members with array passed through the action", () => {
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

});
