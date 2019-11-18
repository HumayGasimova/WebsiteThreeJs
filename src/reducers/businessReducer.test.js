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
    })

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
    })

});
