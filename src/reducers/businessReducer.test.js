
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
        expect(reducer(initialState, action)).toEqual(state);
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
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should update funds with the value passed through actions", () => {
        const action = { 
            type: actionTypes.UPDATE_FUNDS,
            value: 0.5
        }
        const state = {
            ...initialState, 
            funds: 0.5
        }
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should subtract one from unsoldInventory", () => {
        const action = { 
            type: actionTypes.UPDATE_UNSOLD_INVENTORY
        }
        const initState = {
            ...initialState, 
            unsoldInventory: 7
        }
        const state = {
            ...initialState, 
            unsoldInventory: 6
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should subtract 0.01 from paperclipPrice", () => {
        const action = { 
            type: actionTypes.LOWER_PRICE
        }
        const initState = {
            ...initialState, 
            paperclipPrice: 7.01
        }
        const state = {
            ...initialState, 
            paperclipPrice: 7
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should add 0.01 to paperclipPrice", () => {
        const action = { 
            type: actionTypes.RAISE_PRICE
        }
        const initState = {
            ...initialState, 
            paperclipPrice: 7.01
        }
        const state = {
            ...initialState, 
            paperclipPrice: 7.02
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update publicDemand using formula", () => {
        const action = { 
            type: actionTypes.UPDATE_PUBLIC_DEMAND
        }
        const initState = {
            ...initialState, 
            publicDemand: 16,
            maxPublicDemand: 800,
            paperclipPrice: 0.67
        }
        const state = {
            ...initialState, 
            publicDemand: 12,
            maxPublicDemand: 800,
            paperclipPrice: 0.67
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should disable Marketing Button if funds are less than marketingCost", () => {
        const action = { 
            type: actionTypes.TOGGLE_MARKETING_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            marketingCost: 50,
            marketingButtonDisabled: false
        }
        const state = {
            ...initialState, 
            funds: 40,
            marketingCost: 50,
            marketingButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should enable Marketing Button if funds are more than marketingCost", () => {
        const action = { 
            type: actionTypes.TOGGLE_MARKETING_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            marketingCost: 30,
            marketingButtonDisabled: true
        }
        const state = {
            ...initialState, 
            funds: 40,
            marketingCost: 30,
            marketingButtonDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should add 1 to marketingLevel, update funds by subtracting marketingCost, multiply marketingCost by 2, update delayUnsoldInventaryConst using formula", () => {
        const action = { 
            type: actionTypes.MARKETING_NEXT_LEVEL
        }
        const initState = {
            ...initialState, 
            funds: 50,
            marketingCost: 20,
            marketingLevel: 2,
            delayUnsoldInventaryConst: 50
        }
        const state = {
            ...initialState, 
            funds: 30,
            marketingCost: 40,
            marketingLevel: 3,
            delayUnsoldInventaryConst: 49.1
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update maxPublicDemand using formula", () => {
        const action = { 
            type: actionTypes.UPDATE_MAX_PUBLIC_DEMAND
        }
        const initState = {
            ...initialState, 
            maxPublicDemand: 300
        }
        const state = {
            ...initialState, 
            maxPublicDemand: 330
        }
        expect(reducer(initState, action)).toEqual(state);
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
