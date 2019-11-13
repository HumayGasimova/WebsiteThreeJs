/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Reducer
*/

import reducer from './businessReducer';

/**
* Initial State
*/

import { 
    initialState 
} from './businessReducer'


describe('businessReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    // it("should add 1 paperclips, add 1 to unsoldInventory and subtract 1 from wire", () => {
    //     const action = { type: actionTypes.MAKE_PAPERCLIP }
    //     const state = {
    //         ...initialState, 
    //         paperClips: 1, 
    //         unsoldInventory: 1, 
    //         wire: 999
    //     }
    //     expect(reducer(initialState, action)).toEqual(state);
    // })

});
