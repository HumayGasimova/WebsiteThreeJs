
import * as actionTypes from "../constants/actionTypes";

import reducer from './businessReducer';
import { initialState } from './businessReducer'


describe('businessReducer', () => {

    it("should return the initial state", () => {
        const action = { type: "NONE" }
        expect(reducer(undefined, action)).toEqual(initialState);
    })

    it("should add 1 paperclips, add 1 to unsoldInventory and subtract 1 from wire", () => {
        const action = { type: actionTypes.MAKE_PAPERCLIP }
        const state = {
            ...initialState, 
            paperClips: 1, 
            unsoldInventory: 1, 
            wire: 49
        }
        expect(reducer(undefined, action)).toEqual(state);
    })

    it("should update clipsPerSec with the value passed through actions", () => {
        const action = { 
            type: actionTypes.UPDATE_CLIPS_PER_SEC,
            val: 3
        }
        const state = {
            ...initialState, 
            clipsPerSec: 3
        }
        expect(reducer(undefined, action)).toEqual(state);
    })
    

    // it("should return the initial state", () => {
    //    expect(reducer(undefined, {})).toEqual(state);
    // })

    // it('should return the initial state', () => {
    //     expect(reducer(undefined, {})).toMatchSnapshot()
    //   })

    // it('should handle MAKE_PAPERCLIP', () => {
    //     expect(reducer(initialState,{type: 'MAKE_PAPERCLIP'})).toMatchSnapshot()
    // })

    // it("should add 1 paperclips, add 1 to unsoldInventory and subtract 1 from wire", () => {
    //     expect(reducer(initialState, {type: actionTypes.MAKE_PAPERCLIP})).toEqual(
    //         {
    //            ...initialState,
    //            paperClips: 1,
    //            unsoldInventory: 1,
    //            wire: 49
    //         }
    //        );
    //  })


});
