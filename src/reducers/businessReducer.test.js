
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

    it("should update clipsPerSec with the value passed through action", () => {
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

    it("should update funds with the value passed through action", () => {
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

    it("should update wire by adding wireToAdd and funds by subtracting the wirePrice", () => {
        const action = { 
            type: actionTypes.BUY_WIRE
        }
        const initState = {
            ...initialState, 
            wirePrice: 20,
            wireToAdd: 500,
            wire: 700,
            funds: 50
        }
        const state = {
            ...initialState, 
            wirePrice: 20,
            wireToAdd: 500,
            wire: 1200,
            funds: 30
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update wirePrice with the value passed through action", () => {
        const action = { 
            type: actionTypes.RANDOM_WIRE_PRICE,
            value: 469
        }
        const initState = {
            ...initialState, 
            wirePrice: 87
        }
        const state = {
            ...initialState, 
            wirePrice: 469
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should disable Wire Button if funds are less than wirePrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_WIRE_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            wirePrice: 50,
            wireButtonDisabled: false
        }
        const state = {
            ...initialState, 
            funds: 40,
            wirePrice: 50,
            wireButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should enable Wire Button if funds are more than wirePrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_WIRE_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            wirePrice: 30,
            wireButtonDisabled: true
        }
        const state = {
            ...initialState, 
            funds: 40,
            wirePrice: 30,
            wireButtonDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should (if autoClippersPerSec is 0) update funds by subtracting autoClipperInitPrice, autoClippersPerSec by adding 1, delayAutoPaperClippers by dividing by 1.01, set autoClipperOn to true", () => {
        const action = { 
            type: actionTypes.AUTO_CLIPPERS_ADD_ONE
        }
        const initState = {
            ...initialState, 
            autoClipperInitPrice: 10,
            autoClippersPerSec: 0,
            autoClipperPrice: 7,
            funds: 40,
            delayAutoPaperClippers: 500,
            autoClipperOn: false
        }
        const state = {
            ...initialState, 
            autoClipperInitPrice: 10,
            autoClippersPerSec: 1,
            autoClipperPrice: 7,
            funds: 30,
            delayAutoPaperClippers: 495.049504950495,
            autoClipperOn: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if autoClippersPerSec isn't 0) update funds by subtracting autoClipperPrice, autoClippersPerSec by adding 1, delayAutoPaperClippers by dividing by 1.01, set autoClipperOn to true", () => {
        const action = { 
            type: actionTypes.AUTO_CLIPPERS_ADD_ONE
        }
        const initState = {
            ...initialState, 
            autoClipperInitPrice: 10,
            autoClippersPerSec: 3,
            autoClipperPrice: 7,
            funds: 40,
            delayAutoPaperClippers: 500,
            autoClipperOn: false
        }
        const state = {
            ...initialState, 
            autoClipperInitPrice: 10,
            autoClippersPerSec: 4,
            autoClipperPrice: 7.13,
            funds: 33,
            delayAutoPaperClippers: 495.049504950495,
            autoClipperOn: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if funds is greater than or equal to 5) set autoClipperInitPrice to 5", () => {
        const action = { 
            type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE
        }
        const initState = {
            ...initialState, 
            funds: 7,
            autoClipperInitPrice: 0
        }
        const state = {
            ...initialState,
            funds: 7, 
            autoClipperInitPrice: 5
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if autoClipperInitPrice is less than 5) set autoClipperInitPrice to 0", () => {
        const action = { 
            type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE
        }
        const initState = {
            ...initialState,
            funds: 3, 
            autoClippersPerSec: 0
        }
        const state = {
            ...initialState,
            funds: 3, 
            autoClippersPerSec: 0
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should (if autoClippersPerSec is 0) disable AutoClipper Button if funds are less than autoClipperInitPrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            autoClippersPerSec: 0,
            autoClipperInitPrice: 50,
            autoClippersButtonDisabled: false
        }
        const state = {
            ...initialState, 
            funds: 40,
            autoClippersPerSec: 0,
            autoClipperInitPrice: 50,
            autoClippersButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if autoClippersPerSec is 0) enable AutoClipper Button if funds are more than autoClipperInitPrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 70,
            autoClippersPerSec: 0,
            autoClipperInitPrice: 50,
            autoClippersButtonDisabled: true
        }
        const state = {
            ...initialState, 
            funds: 70,
            autoClippersPerSec: 0,
            autoClipperInitPrice: 50,
            autoClippersButtonDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if autoClippersPerSec isn't 0) disable AutoClipper Button if funds are less than autoClipperPrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 40,
            autoClippersPerSec: 3,
            autoClipperPrice: 55,
            autoClippersButtonDisabled: false
        }
        const state = {
            ...initialState, 
            funds: 40,
            autoClippersPerSec: 3,
            autoClipperPrice: 55,
            autoClippersButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if autoClippersPerSec isn't 0) enable AutoClipper Button if funds are more than autoClipperPrice", () => {
        const action = { 
            type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
        }
        const initState = {
            ...initialState, 
            funds: 70,
            autoClippersPerSec: 3,
            autoClipperPrice: 55,
            autoClippersButtonDisabled: true
        }
        const state = {
            ...initialState, 
            funds: 70,
            autoClippersPerSec: 3,
            autoClipperPrice: 55,
            autoClippersButtonDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update trust by adding 1", () => {
        const action = { 
            type: actionTypes.TRUST_PLUS_ONE_FROM_PROJECT
        }
        const initState = {
            ...initialState, 
            trust: 4
        }
        const state = {
            ...initialState, 
            trust: 5
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops by adding 1", () => {
        const action = { 
            type: actionTypes.INCREASE_OPS
        }
        const initState = {
            ...initialState, 
            ops: 7
        }
        const state = {
            ...initialState, 
            ops: 8
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops by subtracting 1", () => {
        const action = { 
            type: actionTypes.DECREASE_OPS
        }
        const initState = {
            ...initialState, 
            ops: 7
        }
        const state = {
            ...initialState, 
            ops: 6
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update processorsNumber by adding 1", () => {
        const action = { 
            type: actionTypes.INCREASE_PROCESSORS
        }
        const initState = {
            ...initialState, 
            processorsNumber: 7
        }
        const state = {
            ...initialState, 
            processorsNumber: 8
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update processorsMemory by adding 1 and opsMax by adding 1000", () => {
        const action = { 
            type: actionTypes.INCREASE_PROCESSORS_MEMORY
        }
        const initState = {
            ...initialState, 
            processorsMemory: 7,
            opsMax: 100
        }
        const state = {
            ...initialState, 
            processorsMemory: 8,
            opsMax: 1100
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update creativity by adding 1", () => {
        const action = { 
            type: actionTypes.INCREASE_CREATIVITY
        }
        const initState = {
            ...initialState, 
            creativity: 7
        }
        const state = {
            ...initialState, 
            creativity: 8
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
