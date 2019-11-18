/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './paintReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './paintReducer'


describe('paintReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    it("should update mousePressed with the value passed through the action", () => {
        const action = { 
            type: actionTypes.MOUSE_DOWN,
            val: true
        }
        const initState = {
            ...initialState, 
            mousePressed: false
        }
        const state = {
            ...initialState, 
            mousePressed: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update color with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_COLOR,
            color: "blue"
        }
        const initState = {
            ...initialState, 
            color: "green"
        }
        const state = {
            ...initialState, 
            color: "blue"
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update lastX and lastY with the value passed through the action", () => {
        const action = { 
            type: actionTypes.CAPTURE_LAST_X_Y,
            lastX: 463,
            lastY: 732
        }
        const initState = {
            ...initialState, 
            lastX: 647,
            lastY: 557
        }
        const state = {
            ...initialState, 
            lastX: 463,
            lastY: 732
        }
        expect(reducer(initState, action)).toEqual(state);
    });

});
