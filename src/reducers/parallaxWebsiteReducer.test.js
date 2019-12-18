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
            menuButtonIsPressed: false,
        }
        const state = {
            ...initialState, 
            menuButtonIsPressed: true,
        }
        expect(reducer(initState, action)).toEqual(state);
    });

});
