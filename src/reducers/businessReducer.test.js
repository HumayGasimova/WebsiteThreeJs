
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
            wire: 999
        }
        expect(reducer(initialState, action)).toEqual(state);
    })

    it("should update clipsPerSec with the value passed through the action", () => {
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

    it("should update funds with the value passed through the action", () => {
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

    it("should update publicDemand using the formula", () => {
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

    it("should add 1 to marketingLevel, update funds by subtracting marketingCost, multiply marketingCost by 2, update delayUnsoldInventaryConst using the formula", () => {
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

    it("should update maxPublicDemand using the formula", () => {
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

    it("should update wirePrice with the value passed through the action", () => {
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

    it("should update trust with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TRUST_PLUS_ONE_FROM_PROJECT,
            val: 4
        }
        const initState = {
            ...initialState, 
            trust: 3
        }
        const state = {
            ...initialState, 
            trust: 7
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

    it("should update ops by subtracting the price passed through the action and set revTracker to true", () => {
        const action = { 
            type: actionTypes.SHOW_REV_TRACKER,
            price: 10
        }
        const initState = {
            ...initialState, 
            revTracker: false,
            ops: 100
        }
        const state = {
            ...initialState, 
            revTracker: true,
            ops: 90
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update cards by adding 1 project", () => {
        const action = { 
            type: actionTypes.ADD_PROJECT,
            project: { a:12 }
        }
        const initState = {
            ...initialState, 
            cards: [{ a:10 }]
        }
        const state = {
            ...initialState, 
            cards: [{ a:10 },{ a:12 }]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops by subtracting 1", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS,
            ops: 10
        }
        const initState = {
            ...initialState, 
            ops: 30
        }
        const state = {
            ...initialState, 
            ops: 20
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update cards by deleting card with id passed through the action", () => {
        const action = { 
            type: actionTypes.DELETE_CARD,
            cardId: 12
        }
        const initState = {
            ...initialState, 
            cards:  [{ id:10 },{ id:11 },{ id:12 },{ id:13 }]
        }
        const state = {
            ...initialState, 
            cards: [{ id:10 },{ id:11 },{ id:13 }]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if paperClips are less than clipsToBuyTrust) do nothing", () => {
        const action = { 
            type: actionTypes.TRUST_PLUS_ONE
        }
        const initState = {
            ...initialState, 
            paperClips: 2000,
            clipsToBuyTrust: 3000,
            prevTrust: 1000,
            trust: 4
        }
        const state = {
            ...initialState, 
            paperClips: 2000,
            clipsToBuyTrust: 3000,
            prevTrust: 1000,
            trust: 4
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if paperClips are more than and equal to clipsToBuyTrust && trust is equal to 2) update clipsToBuyTrust with the value 5000 and trust by adding 1", () => {
        const action = { 
            type: actionTypes.TRUST_PLUS_ONE
        }
        const initState = {
            ...initialState, 
            paperClips: 4000,
            clipsToBuyTrust: 3000,
            prevTrust: 1000,
            trust: 2
        }
        const state = {
            ...initialState, 
            paperClips: 4000,
            clipsToBuyTrust: 5000,
            prevTrust: 1000,
            trust: 3
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if paperClips are more than and equal to clipsToBuyTrust && trust isn't equal to 2) update clipsToBuyTrust with the value of sum prevTrust and clipsToBuyTrust,prevTrust with the value of clipsToBuyTrust and trust by adding 1", () => {
        const action = { 
            type: actionTypes.TRUST_PLUS_ONE
        }
        const initState = {
            ...initialState, 
            paperClips: 10000,
            clipsToBuyTrust: 6000,
            prevTrust: 1000,
            trust: 5
        }
        const state = {
            ...initialState, 
            paperClips: 10000,
            clipsToBuyTrust: 7000,
            prevTrust: 6000,
            trust: 6
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    
    it("should update card with 3 new card passed through the action", () => {
        const action = { 
            type: actionTypes.INIT_PROJECTS,
            card1: {a: 1},
            card2: {a: 2},
            card3: {a: 3}
        }
        const initState = {
            ...initialState, 
            cards: []
        }
        const state = {
            ...initialState, 
            cards: [{a: 1},{a: 2},{a: 3}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update card with 3 new card passed through the action", () => {
        const action = { 
            type: actionTypes.CHECK_CARD_VALIDITY,
            cardId: 2,
            valid: true,
            i: 1
        }
        const initState = {
            ...initialState, 
            cards: [{id: 1, valid: false},{id: 2, valid: false},{id: 3, valid: true}]
        }
        const state = {
            ...initialState, 
            cards: [{id: 1, valid: false},{id: 2, valid: true},{id: 3, valid: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update creativity by removing the value passed through the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_CREAT,
            creativity: 30
        }
        const initState = {
            ...initialState, 
            creativity: 50
        }
        const state = {
            ...initialState, 
            creativity: 20
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update creativity and ops by removing the value passed through the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_CREAT,
            ops: 10,
            creativity: 30
        }
        const initState = {
            ...initialState, 
            ops: 60,
            creativity: 50
        }
        const state = {
            ...initialState, 
            ops: 50,
            creativity: 20
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should(if the value that is passed through the action is not equal to 500) update delayAutoPaperClippers using the formula and the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMPROVE_AUTO_PAPER_CLIPPER,
            val: 25
        }
        const initState = {
            ...initialState, 
            delayAutoPaperClippers: 9000
        }
        const state = {
            ...initialState, 
            delayAutoPaperClippers: 6750
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should(if the value that is passed through the action is equal to 500) update delayAutoPaperClippers using the formula and the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMPROVE_AUTO_PAPER_CLIPPER,
            val: 500
        }
        const initState = {
            ...initialState, 
            delayAutoPaperClippers: 9000
        }
        const state = {
            ...initialState, 
            delayAutoPaperClippers: 18
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should enable AutoPaperClipper Button", () => {
        const action = { 
            type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
            val: false
        }
        const initState = {
            ...initialState, 
            makePaperclipDisabled: true
        }
        const state = {
            ...initialState, 
            makePaperclipDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update wireToAdd using the formula and the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMPROVE_WIRE_EXTRUSION,
            val: 25
        }
        const initState = {
            ...initialState, 
            wireToAdd: 1600
        }
        const state = {
            ...initialState, 
            wireToAdd: 2000
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set creativityTurnOn to true", () => {
        const action = { 
            type: actionTypes.CREATIVITY_TURN_ON
        }
        const initState = {
            ...initialState, 
            creativityTurnOn: false
        }
        const state = {
            ...initialState, 
            creativityTurnOn: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set noWire to true", () => {
        const action = { 
            type: actionTypes.WIRE_EXISTS,
            val: true
        }
        const initState = {
            ...initialState, 
            noWire: false
        }
        const state = {
            ...initialState, 
            noWire: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update maxPublicDemand using the formula and the value passed through the action and delayUnsoldInventaryConst using the formula", () => {
        const action = { 
            type: actionTypes.IMPROVE_MARKETING,
            val: 40
        }
        const initState = {
            ...initialState, 
            maxPublicDemand: 32,
            delayUnsoldInventaryConst: 6000
        }
        const state = {
            ...initialState, 
            maxPublicDemand: 45,
            delayUnsoldInventaryConst: 5820
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set showInvestmentEngine to true", () => {
        const action = { 
            type: actionTypes.SHOW_INVESTMENT_ENGINE,
            val: true
        }
        const initState = {
            ...initialState, 
            showInvestmentEngine: false
        }
        const state = {
            ...initialState, 
            showInvestmentEngine: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should set showStrategicModeling to true", () => {
        const action = { 
            type: actionTypes.SHOW_STRATEGIC_MODELING,
            val: true
        }
        const initState = {
            ...initialState, 
            showStrategicModeling: false
        }
        const state = {
            ...initialState, 
            showStrategicModeling: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update trust by removing the value passed through the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_TRUST,
            trust: 50
        }
        const initState = {
            ...initialState, 
            trust: 100
        }
        const state = {
            ...initialState, 
            trust: 50
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if length of comments is less than 5) add new comment to commentArray in state", () => {
        const action = { 
            type: actionTypes.SEND_COMMENT_TO_TERMINAL,
            comment: "Hey!"
        }
        const initState = {
            ...initialState, 
            comments: []
        }
        const state = {
            ...initialState, 
            comments: ["Hey!"]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if length of comments is greater than or equal to 5) add new comment to commentArray in state, and remove the first comment in commentsArray", () => {
        const action = { 
            type: actionTypes.SEND_COMMENT_TO_TERMINAL,
            comment: "!"
        }
        const initState = {
            ...initialState, 
            comments: ["Hey", "Paperclips","Game","Is","Over"]
        }
        const state = {
            ...initialState, 
            comments: ["Paperclips","Game","Is","Over","!"]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should add new strategy to listStrategicModeling and playerStrategyList", () => {
        const action = { 
            type: actionTypes.ADD_NEW_STRATEGY,
            strategy: "New Strategy3"
        }
        const initState = {
            ...initialState, 
            listStrategicModeling: ["New Strategy", "New Strategy1"]
        }
        const state = {
            ...initialState, 
            listStrategicModeling: ["New Strategy", "New Strategy1", "New Strategy3"]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set showDropdownInvestments to true, showDropdownStrategicModeling to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_DROPDOWN_INVESTMENTS
        }
        const initState = {
            ...initialState, 
            showDropdownInvestments: false,
            showDropdownStrategicModeling: true,
        }
        const state = {
            ...initialState, 
            showDropdownInvestments: true,
            showDropdownStrategicModeling: false,
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set showDropdownStrategicModeling to true, showDropdownInvestments to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_DROPDOWN_STRATEGIC_MODELING
        }
        const initState = {
            ...initialState, 
            showDropdownStrategicModeling: false,
            showDropdownInvestments: true
        }
        const state = {
            ...initialState, 
            showDropdownStrategicModeling: true,
            showDropdownInvestments: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set showDropdownInvestments and showDropdownStrategicModeling to false", () => {
        const action = { 
            type: actionTypes.CLOSE_DROPDOWNS
        }
        const initState = {
            ...initialState, 
            showDropdownInvestments: true,
            showDropdownStrategicModeling: true
        }
        const state = {
            ...initialState, 
            showDropdownInvestments: false,
            showDropdownStrategicModeling: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set quantumComputingIsShown to true", () => {
        const action = { 
            type: actionTypes.SHOW_QUANTUM_COMPUTING,
            val: true
        }
        const initState = {
            ...initialState, 
            quantumComputingIsShown: false
        }
        const state = {
            ...initialState, 
            quantumComputingIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update showQCompMessage by adding 1", () => {
        const action = { 
            type: actionTypes.SHOW_QUANT_COMP_MESSAGE
        }
        const initState = {
            ...initialState, 
            showQCompMessage: 2
        }
        const state = {
            ...initialState, 
            showQCompMessage: 3
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should find chip in chipsArray using chipsNumber passed through the action and set its property - showChip to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_CHIP,
            val: true,
            chipsNumber: 'chip2'
        }
        const initState = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: false}, {chipsNumber: 'chip2', showChip: false}]
        }
        const state = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: false}, {chipsNumber: 'chip2', showChip: true}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set changedToQOps to true", () => {
        const action = { 
            type: actionTypes.CHANGE_TO_Q_OPS
        }
        const initState = {
            ...initialState, 
            changedToQOps: false
        }
        const state = {
            ...initialState, 
            changedToQOps: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should find chip in chipsArray using chipsNumber passed through the action and update its property qOps by adding 1", () => {
        const action = { 
            type: actionTypes.ADD_Q_OPS,
            chipsNumber: 'chip2'
        }
        const initState = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 150}, {chipsNumber: 'chip2', showChip: true, qOps: 50}]
        }
        const state = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 150}, {chipsNumber: 'chip2', showChip: true, qOps: 51}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should find chip in chipsArray using chipsNumber passed through the action and update its property qOps by subtracting 1", () => {
        const action = { 
            type: actionTypes.SUBTRACT_Q_OPS,
            chipsNumber: 'chip1'
        }
        const initState = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 150}, {chipsNumber: 'chip2', showChip: true, qOps: 50}]
        }
        const state = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 149}, {chipsNumber: 'chip2', showChip: true, qOps: 50}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set currentQOps to the value passed throught the action", () => {
        const action = { 
            type: actionTypes.CAPTURE_CURRENT_Q_OPS,
            val: 375
        }
        const initState = {
            ...initialState, 
            currentQOps: 283
        }
        const state = {
            ...initialState, 
            currentQOps: 375
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should add one chip that is passed throught the action to chipsArray", () => {
        const action = { 
            type: actionTypes.ADD_CHIP,
            obj: {chipsNumber: 'chip3', showChip: true, qOps: 183}
        }
        const initState = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 150}, {chipsNumber: 'chip2', showChip: true, qOps: 51}]
        }
        const state = {
            ...initialState, 
            chips: [{chipsNumber: 'chip1', showChip: true, qOps: 150}, {chipsNumber: 'chip2', showChip: true, qOps: 51}, {chipsNumber: 'chip3', showChip: true, qOps: 183}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops by adding the value passed throught the action", () => {
        const action = { 
            type: actionTypes.UPDATE_OPS,
            val: 40
        }
        const initState = {
            ...initialState, 
            ops: 300
        }
        const state = {
            ...initialState, 
            ops: 340
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update time by adding 1", () => {
        const action = { 
            type: actionTypes.START_TIMER
        }
        const initState = {
            ...initialState, 
            time: 4
        }
        const state = {
            ...initialState, 
            time: 5
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set wireBuyerIsShown to true", () => {
        const action = { 
            type: actionTypes.SHOW_AUTO_WIRE_BUYER
        }
        const initState = {
            ...initialState, 
            wireBuyerIsShown: false
        }
        const state = {
            ...initialState, 
            wireBuyerIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set wireBuyerProjectIsShown to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
        }
        const initState = {
            ...initialState, 
            wireBuyerProjectIsShown: false
        }
        const state = {
            ...initialState, 
            wireBuyerProjectIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set autoWireBuyerIsOn to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_AUTO_WIRE_BUYER
        }
        const initState = {
            ...initialState, 
            autoWireBuyerIsOn: false
        }
        const state = {
            ...initialState, 
            autoWireBuyerIsOn: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set megaClippersIsShown to true", () => {
        const action = { 
            type: actionTypes.SHOW_MEGA_CLIPPERS
        }
        const initState = {
            ...initialState, 
            megaClippersIsShown: false
        }
        const state = {
            ...initialState, 
            megaClippersIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update delayUnsoldInventary using the formula", () => {
        const action = { 
            type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY
        }
        const initState = {
            ...initialState, 
            publicDemand: 32,
            delayUnsoldInventaryConst: 500,
            delayUnsoldInventary: 7000
        }
        const state = {
            ...initialState, 
            publicDemand: 32,
            delayUnsoldInventaryConst: 500,
            delayUnsoldInventary: 1562.5
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if investmentsCash is equal to 0) set funds to 0, update investmentsCash and fakeInvestmentsCash with the value of funds", () => {
        const action = { 
            type: actionTypes.GET_DEPOSIT
        }
        const initState = {
            ...initialState, 
            funds: 59,
            investmentsCash: 0,
            fakeInvestmentsCash: 33
        }
        const state = {
            ...initialState, 
            funds: 0,
            investmentsCash: 59,
            fakeInvestmentsCash: 59
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if investmentsCash isn't equal to 0) set funds to 0, update investmentsCash and fakeInvestmentsCash with the value of sum of funds and investmentsCash", () => {
        const action = { 
            type: actionTypes.GET_DEPOSIT
        }
        const initState = {
            ...initialState, 
            funds: 59,
            investmentsCash: 48,
            fakeInvestmentsCash: 37
        }
        const state = {
            ...initialState, 
            funds: 0,
            investmentsCash: 107,
            fakeInvestmentsCash: 107
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if investmentsLines includes '' && notEmpty is true) update one emty investmentsLine with a notEmpty investmentsLine", () => {
        const action = { 
            type: actionTypes.ADD_INVESTMENTS_LINE,
            obj: {a:5},
            notEmpty: true
        }
        const initState = {
            ...initialState, 
            investmentsLines: [{a:4},'','','','']
        }
        const state = {
            ...initialState, 
            investmentsLines: [{a:4},{a:5},'','','']
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if investmentsLines includes '' && notEmpty is false) add one empty investmentsLine ", () => {
        const action = { 
            type: actionTypes.ADD_INVESTMENTS_LINE,
            obj: '',
            notEmpty: false
        }
        const initState = {
            ...initialState, 
            investmentsLines: [{a:4},{a:5},'','','']
        }
        const state = {
            ...initialState, 
            investmentsLines: [{a:5},'','','','']
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if investmentsLines does not include '' && notEmpty is true) add one investmentsLine and remove investmentsLine[0] ", () => {
        const action = { 
            type: actionTypes.ADD_INVESTMENTS_LINE,
            obj: {a:6},
            notEmpty: true
        }
        const initState = {
            ...initialState, 
            investmentsLines: [{a:1},{a:2},{a:3},{a:4},{a:5}]
        }
        const state = {
            ...initialState, 
            investmentsLines: [{a:2},{a:3},{a:4},{a:5},{a:6}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update investmentsLines", () => {
        const action = { 
            type: actionTypes.UPDATE_INVESTMENTS_LINES,
            array: [{a:7},{a:8},{a:9},{a:10},{a:11}]
        }
        const initState = {
            ...initialState, 
            investmentsLines: [{a:1},{a:2},{a:3},{a:4},{a:5}]
        }
        const state = {
            ...initialState, 
            investmentsLines: [{a:7},{a:8},{a:9},{a:10},{a:11}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set investmentsTotal to the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_INVESTMENTS_TOTAL,
            total: 500
        }
        const initState = {
            ...initialState, 
            investmentsTotal: 300
        }
        const state = {
            ...initialState, 
            investmentsTotal: 500
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set investmentsCash to the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_INVESTMENTS_CASH,
            cash: 700
        }
        const initState = {
            ...initialState, 
            investmentsCash: 200
        }
        const state = {
            ...initialState, 
            investmentsCash: 700
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set investmentsStocks to the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_INVESTMENTS_STOCKS,
            stocks: 900
        }
        const initState = {
            ...initialState, 
            investmentsStocks: 300
        }
        const state = {
            ...initialState, 
            investmentsStocks: 900
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set fakeInvestmentsCash to the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_FAKE_INVESTMENTS_CASH,
            cash: 374
        }
        const initState = {
            ...initialState, 
            fakeInvestmentsCash: 469
        }
        const state = {
            ...initialState, 
            fakeInvestmentsCash: 374
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if funds is equal to 0) update funds with the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_FUNDS_WITHDRAW,
            val: 63
        }
        const initState = {
            ...initialState, 
            funds: 0
        }
        const state = {
            ...initialState, 
            funds: 63
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if funds isn't equal to 0) update funds with the sum of funds and the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_FUNDS_WITHDRAW,
            val: 63
        }
        const initState = {
            ...initialState, 
            funds: 25
        }
        const state = {
            ...initialState, 
            funds: 88
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update the element in chosenListDropdownArray with index, with the value passed through the action ", () => {
        const action = { 
            type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
            chosen: 'three',
            index: 0
        }
        const initState = {
            ...initialState, 
            chosenListDropdown: ['one','two']
        }
        const state = {
            ...initialState, 
            chosenListDropdown: ['three','two']
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update delayUpdatingInvScreen and delayUpdatingInvLines with the values passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_INVESTMENTS_DELAY,
            delayScreen: 10000,
            delayLines: 4000
        }
        const initState = {
            ...initialState, 
            delayUpdatingInvScreen: 7000,
            delayUpdatingInvLines: 3000
        }
        const state = {
            ...initialState, 
            delayUpdatingInvScreen: 10000,
            delayUpdatingInvLines: 4000
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update avgRevPerSec with the values passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_AVG_REV_PER_SEC,
            val: 3
        }
        const initState = {
            ...initialState, 
            avgRevPerSec: 7
        }
        const state = {
            ...initialState, 
            avgRevPerSec: 3
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update avgClipsSoldPerSec with the values passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_AVG_CLIPS_SOLD_PER_SEC,
            val: 4
        }
        const initState = {
            ...initialState, 
            avgClipsSoldPerSec: 6
        }
        const state = {
            ...initialState, 
            avgClipsSoldPerSec: 4
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (megaClippersPerSec is equal to 0) update megaClippersPerSec by adding 1, funds by subtracting the megaClipperInitPrice", () => {
        const action = { 
            type: actionTypes.MEGA_CLIPPERS_BUTTON_PRESSED,
        }
        const initState = {
            ...initialState, 
            megaClippersPerSec: 0,
            megaClipperPrice: 5,
            megaClipperInitPrice: 7,
            funds: 20
        }
        const state = {
            ...initialState, 
            megaClippersPerSec: 1,
            megaClipperPrice: 5,
            megaClipperInitPrice: 7,
            funds: 13
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (megaClippersPerSec is not equal to 0) update megaClippersPerSec by adding 1, megaClipperPrice using the formula and funds by subtracting the megaClipperPrice", () => {
        const action = { 
            type: actionTypes.MEGA_CLIPPERS_BUTTON_PRESSED,
        }
        const initState = {
            ...initialState, 
            megaClippersPerSec: 3,
            megaClipperPrice: 8,
            funds: 20
        }
        const state = {
            ...initialState, 
            megaClippersPerSec: 4,
            megaClipperPrice: 8.56,
            funds: 12
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update megaClippersToAdd using the formula and the value passed through the action", () => {
        const action = { 
            type: actionTypes.IMPROVE_MEGA_CLIPPERS,
            val: 37
        }
        const initState = {
            ...initialState, 
            megaClippersToAdd: 300
        }
        const state = {
            ...initialState, 
            megaClippersToAdd: 411
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update autoAndMegaClippersWorks with the value passed through the action", () => {
        const action = { 
            type: actionTypes.SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS,
            val: true
        }
        const initState = {
            ...initialState, 
            autoAndMegaClippersWorks: false
        }
        const state = {
            ...initialState, 
            autoAndMegaClippersWorks: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops by subtracting the value of newTournamentCost", () => {
        const action = { 
            type: actionTypes.START_NEW_TOURNAMENT
        }
        const initState = {
            ...initialState, 
            ops: 47,
            newTournamentCost: 5
        }
        const state = {
            ...initialState, 
            ops: 42,
            newTournamentCost: 5
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update tournamentContinues with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOURNAMENT_STATE,
            val: true
        }
        const initState = {
            ...initialState, 
            tournamentContinues: false
        }
        const state = {
            ...initialState, 
            tournamentContinues: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update newTournamentCost by adding 1000", () => {
        const action = { 
            type: actionTypes.UPDATE_NEW_TOURNAMENT_COST
        }
        const initState = {
            ...initialState, 
            newTournamentCost: 4000
        }
        const state = {
            ...initialState, 
            newTournamentCost: 5000
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if ops is less than newTournamentCost and tournamentContinues is set to true) newTournamentButtonDisabled set to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON
        }
        const initState = {
            ...initialState, 
            ops: 10,
            newTournamentCost: 37,
            tournamentContinues: true,
            newTournamentButtonDisabled: false,
        }
        const state = {
            ...initialState, 
            ops: 10,
            newTournamentCost: 37,
            tournamentContinues: true,
            newTournamentButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if ops is less than newTournamentCost and tournamentContinues is set to false) newTournamentButtonDisabled set to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON
        }
        const initState = {
            ...initialState, 
            ops: 10,
            newTournamentCost: 37,
            tournamentContinues: false,
            newTournamentButtonDisabled: false,
        }
        const state = {
            ...initialState, 
            ops: 10,
            newTournamentCost: 37,
            tournamentContinues: false,
            newTournamentButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if ops is greater than newTournamentCost and tournamentContinues is set to true) newTournamentButtonDisabled set to true", () => {
        const action = { 
            type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON
        }
        const initState = {
            ...initialState, 
            ops: 100,
            newTournamentCost: 37,
            tournamentContinues: true,
            newTournamentButtonDisabled: false,
        }
        const state = {
            ...initialState, 
            ops: 100,
            newTournamentCost: 37,
            tournamentContinues: true,
            newTournamentButtonDisabled: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should (if ops is greater than newTournamentCost and tournamentContinues is set to true) newTournamentButtonDisabled set to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON
        }
        const initState = {
            ...initialState, 
            ops: 100,
            newTournamentCost: 37,
            tournamentContinues: false,
            newTournamentButtonDisabled: true,
        }
        const state = {
            ...initialState, 
            ops: 100,
            newTournamentCost: 37,
            tournamentContinues: false,
            newTournamentButtonDisabled: false
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should strategicModelingData with the object passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_STRATEGIC_MODELING_DATA,
            obj: {moveA:"Paperclip A", moveB:"Paperclip B", cell1: 34, cell2: 35, cell3: 65, cell4: 83}
        }
        const initState = {
            ...initialState, 
            strategicModelingData: {moveA:"Move A", moveB:"Move B", cell1: "0,0", cell2: "0,0", cell3: "0,0", cell4: "0,0"}
        }
        const state = {
            ...initialState, 
            strategicModelingData: {moveA:"Paperclip A", moveB:"Paperclip B", cell1: 34, cell2: 35, cell3: 65, cell4: 83}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should strategicModelingCurrentList array with the value passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST,
            obj: {id: 1, strategy: "Current", val: 0, chosen: false, round: 25},
            round: 25
        }
        const initState = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1}]
        }
        const state = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "Current", val: 0, chosen: false, round: 25},{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should find object with strategy 'RANDOM' in strategicModelingCurrentList array and update its property chosen with the value passed through the action", () => {
        const action = { 
            type: actionTypes.STRATEGY_CHOSEN,
            strategy: "RANDOM", 
            val: true
        }
        const initState = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "A100", val: 0, chosen: false, round: 1},{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1}]
        }
        const state = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "A100", val: 0, chosen: false, round: 1},{id: 1, strategy: "RANDOM", val: 0, chosen: true, round: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update set property chosen in strategicModelingCurrentList array to false ", () => {
        const action = { 
            type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST
        }
        const initState = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "A100", val: 0, chosen: false, round: 1},{id: 1, strategy: "RANDOM", val: 0, chosen: true, round: 1},{id: 1, strategy: "MINIMAX", val: 0, chosen: true, round: 1}]
        }
        const state = {
            ...initialState, 
            strategicModelingCurrentList: [{id: 1, strategy: "A100", val: 0, chosen: false, round: 1},{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1},{id: 1, strategy: "MINIMAX", val: 0, chosen: false, round: 1}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update strategicModelingRound with the value passed through the action ", () => {
        const action = { 
            type: actionTypes.UPDATE_STRATEGIC_MODELING_ROUND,
            round: 9
        }
        const initState = {
            ...initialState, 
            strategicModelingRound: 1
        }
        const state = {
            ...initialState, 
            strategicModelingRound: 9
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update strategicModelingRound with the value passed through the action ", () => {
        const action = { 
            type: actionTypes.UPDATE_STRATEGIC_MODELING_ROUND,
            round: 9
        }
        const initState = {
            ...initialState, 
            strategicModelingRound: 1
        }
        const state = {
            ...initialState, 
            strategicModelingRound: 9
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update roundAndPlayersIsShown with the value passed through the action ", () => {
        const action = { 
            type: actionTypes.SHOW_ROUND_AND_PLAYERS,
            val: true
        }
        const initState = {
            ...initialState, 
            roundAndPlayersIsShown: false
        }
        const state = {
            ...initialState, 
            roundAndPlayersIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update roundAndPlayersIsShown with the value passed through the action ", () => {
        const action = { 
            type: actionTypes.SHOW_ROUND_AND_PLAYERS,
            val: true
        }
        const initState = {
            ...initialState, 
            roundAndPlayersIsShown: false
        }
        const state = {
            ...initialState, 
            roundAndPlayersIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update roundsArray by deleting first element in the array", () => {
        const action = { 
            type: actionTypes.UPDATE_ROUNDS_ON_SCREEN
        }
        const initState = {
            ...initialState, 
            roundsArray: [1,2,3,4]
        }
        const state = {
            ...initialState, 
            roundsArray: [2,3,4]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update playerLeftStrategyList by deleting first element in the array", () => {
        const action = { 
            type: actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN
        }
        const initState = {
            ...initialState, 
            playerLeftStrategyList: ['a','b','c']
        }
        const state = {
            ...initialState, 
            playerLeftStrategyList: ['b','c']
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update playerLeftStrategyList by deleting first element in the array and add the deleted element at the end", () => {
        const action = { 
            type: actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN
        }
        const initState = {
            ...initialState, 
            playerTopStrategyList: ['a','b','c']
        }
        const state = {
            ...initialState, 
            playerTopStrategyList: ['b','c','a']
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update playerTopStrategyList and playerTopStrategyList with the value of listStrategicModeling, roundsArray with the value of strategicModelingRound (using utility), allRoundsRes and allRoundsResWithValues set to [], listOfFinalResult set to {} ", () => {
        const action = { 
            type: actionTypes.SET_PLAYERS_ARRAY
        }
        const initState = {
            ...initialState, 
            listStrategicModeling: ['pick a start','a','b','c'],
            strategicModelingRound: 9,
            playerLeftStrategyList: [],
            playerTopStrategyList: ['c','a','b'],
            allRoundsRes: [{a:4},{a:7}],
            roundsArray: [1,2,3,4],
            allRoundsResWithValues: [{b: 5},{b: 7}],
            listOfFinalResult: {a: 8, b:3}
        }
        const state = {
            ...initialState, 
            listStrategicModeling: ['pick a start','a','b','c'],
            strategicModelingRound: 9,
            playerLeftStrategyList: ['a','b','c'],
            playerTopStrategyList: ['a','b','c'],
            allRoundsRes: [],
            roundsArray: [1,2,3,4,5,6,7,8,9],
            allRoundsResWithValues: [],
            listOfFinalResult: {}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update allRoundsRes array by adding the object, passed through the action, to the end", () => {
        const action = { 
            type: actionTypes.ALL_ROUNDS_RESULT,
            obj: {a:7}
        }
        const initState = {
            ...initialState,
            allRoundsRes: [{a:4}]
        }
        const state = {
            ...initialState,
            allRoundsRes: [{a:4},{a:7}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update allRoundsResWithValues array with the array passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATED_ALL_ROUNDS_RES,
            array: [{a:2},{a:3}]
        }
        const initState = {
            ...initialState,
            allRoundsResWithValues: [{a:7},{a:4}]
        }
        const state = {
            ...initialState,
            allRoundsResWithValues: [{a:2},{a:3}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update listOfFinalResult with the object passed through the action", () => {
        const action = { 
            type: actionTypes.UPDATE_LIST_OF_FINAL_RESULT,
            obj: {a: 7, b: 8, c: 9}
        }
        const initState = {
            ...initialState,
            listOfFinalResult: {}
        }
        const state = {
            ...initialState,
            listOfFinalResult: {a: 7, b: 8, c: 9}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update strategicModelingCurrentList and showStrategicModelingCurrentList with the property with name of strategy that exists in strategicModelingCurrentList array", () => {
        const action = { 
            type: actionTypes.FILL_WITH_VALUES_STRATEGIC_MODELING_CURRENT_LIST
        }
        const initState = {
            ...initialState,
            listOfFinalResult: {random: 573},
            strategicModelingCurrentList: [{strategy: "RANDOM", val: 0}],
            showStrategicModelingCurrentList: [{strategy: "RANDOM", val: 0}]
        }
        const state = {
            ...initialState,
            listOfFinalResult: {random: 573},
            strategicModelingCurrentList: [{strategy: "RANDOM", val: 573}],
            showStrategicModelingCurrentList: [{strategy: "RANDOM", val: 573}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update strategicModelingCurrentList and showStrategicModelingCurrentList with the property with name of strategy that exists in strategicModelingCurrentList array", () => {
        const action = { 
            type: actionTypes.FILL_WITH_VALUES_STRATEGIC_MODELING_CURRENT_LIST
        }
        const initState = {
            ...initialState,
            listOfFinalResult: {random: 573, a100: 636, b100: 875, greedy: 648, generouse: 45, miniMax: 54, titForTat: 458, beatLast: 545},
            strategicModelingCurrentList: [{strategy: "RANDOM", val: 0},{strategy: "A100", val: 0},{strategy: "B100", val: 0},{strategy: "GREEDY", val: 0},{strategy: "GENEROUS", val: 0},{strategy: "MINIMAX", val: 0},{strategy: "TIT FOR TAT", val: 0},{strategy: "BEAT LAST", val: 0}],
            showStrategicModelingCurrentList: [{strategy: "RANDOM", val: 0},{strategy: "A100", val: 0},{strategy: "B100", val: 0},{strategy: "GREEDY", val: 0},{strategy: "GENEROUS", val: 0},{strategy: "MINIMAX", val: 0},{strategy: "TIT FOR TAT", val: 0},{strategy: "BEAT LAST", val: 0}]
        }
        const state = {
            ...initialState,
            listOfFinalResult: {random: 573, a100: 636, b100: 875, greedy: 648, generouse: 45, miniMax: 54, titForTat: 458, beatLast: 545},
            strategicModelingCurrentList: [{strategy: "B100", val: 875},{strategy: "GREEDY", val: 648},{strategy: "A100", val: 636},{strategy: "RANDOM", val: 573},{strategy: "BEAT LAST", val: 545},{strategy: "TIT FOR TAT", val: 458},{strategy: "MINIMAX", val: 54},{strategy: "GENEROUS", val: 45}],
            showStrategicModelingCurrentList:[{strategy: "B100", val: 875},{strategy: "GREEDY", val: 648},{strategy: "A100", val: 636},{strategy: "RANDOM", val: 573},{strategy: "BEAT LAST", val: 545},{strategy: "TIT FOR TAT", val: 458},{strategy: "MINIMAX", val: 54},{strategy: "GENEROUS", val: 45}]
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should update stratedicModelingLeftPartIsShown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
            val: true
        }
        const initState = {
            ...initialState,
            stratedicModelingLeftPartIsShown: false
        }
        const state = {
            ...initialState,
            stratedicModelingLeftPartIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update strategicModelingPartsHover with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_STRATEGIC_MODELING_HOVER,
            val: true
        }
        const initState = {
            ...initialState,
            strategicModelingPartsHover: false
        }
        const state = {
            ...initialState,
            strategicModelingPartsHover: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set the property cell1 in cellIsDark to true and cell2, cell3, cell4 to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_CELLS,
            obj: {
                valLeft: 1,
                valTop: 1
            }
        }
        const initState = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: false}
        }
        const state = {
            ...initialState,
            cellIsDark: {cell1: true, cell2: false, cell3: false, cell4: false}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set the property cell4 in cellIsDark to true and cell1, cell2, cell3 to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_CELLS,
            obj: {
                valLeft: 2,
                valTop: 2
            }
        }
        const initState = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: false}
        }
        const state = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: true}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set the property cell3 in cellIsDark to true and cell1, cell2, cell4 to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_CELLS,
            obj: {
                valLeft: 1,
                valTop: 2
            }
        }
        const initState = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: false}
        }
        const state = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: true, cell4: false}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set the property cell2 in cellIsDark to true and cell1, cell3, cell4 to false", () => {
        const action = { 
            type: actionTypes.TOGGLE_CELLS,
            obj: {
                valLeft: 2,
                valTop: 1
            }
        }
        const initState = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: false}
        }
        const state = {
            ...initialState,
            cellIsDark: {cell1: false, cell2: true, cell3: false, cell4: false}
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update yomi by adding val property of chosen strategy, set strategyWon to strategy property of chosen strategy and valueWon to val property of chosen strategy", () => {
        const action = { 
            type: actionTypes.UPDATE_YOMI
        }
        const initState = {
            ...initialState,
            strategicModelingCurrentList: [{id: 1, strategy: "RANDOM", val: 473, chosen: false, round: 1}, {id: 1, strategy: "A100", val: 284, chosen: true, round: 4}],
            yomi: 48,
            strategyWon: '',
            valueWon: 0
        }
        const state = {
            ...initialState,
            strategicModelingCurrentList: [{id: 1, strategy: "RANDOM", val: 473, chosen: false, round: 1}, {id: 1, strategy: "A100", val: 284, chosen: true, round: 4}] ,
            yomi: 332,
            strategyWon: "A100",
            valueWon: 284
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops, creativity and yomi by subtracting the value passed throught the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_CREAT_AND_YOMI,
            ops: 1,
            creativity: 2,
            yomi: 3
        }
        const initState = {
            ...initialState,
            ops: 48,
            creativity: 25,
            yomi: 78
        }
        const state = {
            ...initialState,
            ops: 47,
            creativity: 23,
            yomi: 75
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops, creativity and yomi by subtracting the value passed throught the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_CREAT_AND_YOMI,
            ops: 1,
            creativity: 2,
            yomi: 3
        }
        const initState = {
            ...initialState,
            ops: 48,
            creativity: 25,
            yomi: 78
        }
        const state = {
            ...initialState,
            ops: 47,
            creativity: 23,
            yomi: 75
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update ops and yomi by subtracting the value passed throught the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_YOMI,
            ops: 4,
            yomi: 6
        }
        const initState = {
            ...initialState,
            ops: 43,
            yomi: 63
        }
        const state = {
            ...initialState,
            ops: 39,
            yomi: 57
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update yomi and money by subtracting the value passed throught the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_YOMI_AND_MONEY,
            yomi: 5,
            money: 3,
        }
        const initState = {
            ...initialState,
            yomi: 64,
            funds: 74
        }
        const state = {
            ...initialState,
            yomi: 59,
            funds: 71
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update money by subtracting the value passed throught the action", () => {
        const action = { 
            type: actionTypes.REMOVE_PRICE_OF_PROJECT_MONEY,
            money: 53
        }
        const initState = {
            ...initialState,
            funds: 74
        }
        const state = {
            ...initialState,
            funds: 21
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set processorsNumber, processorsMemory, ops to 0, and update opsMax by subtracting opsMax value", () => {
        const action = { 
            type: actionTypes.REALLOCATION_OF_TRUST
        }
        const initState = {
            ...initialState,
            processorsNumber: 15,
            processorsMemory: 14,
            ops: 53,
            opsMax: 568
        }
        const state = {
            ...initialState,
            processorsNumber: 0,
            processorsMemory: 0,
            ops: 0,
            opsMax: 0
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set investmentsLevel by adding 1, yomi by subtracting the value of upgradeInvestmentEngineCost, and upgradeInvestmentEngineCost using the formula", () => {
        const action = { 
            type: actionTypes.UPGRADE_INVESTMENT_ENGINE
        }
        const initState = {
            ...initialState,
            investmentsLevel: 2,
            yomi: 50,
            upgradeInvestmentEngineCost: 35
        }
        const state = {
            ...initialState,
            investmentsLevel: 3,
            yomi: 15,
            upgradeInvestmentEngineCost: 136
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set a new initial state passed through the action", () => {
        const action = { 
            type: actionTypes.STATE_FROM_LOCAL_STORAGE,
            state: {a: 5, b: 'Paperclip game'}
        }
        const initState = {
            ...initialState,
            investmentsLevel: 2,
            yomi: 50,
            upgradeInvestmentEngineCost: 35
        }
        const state = {
            a: 5, 
            b: 'Paperclip game'
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update creativityCounterIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'creativityCounter',
            val: true
        }
        const initState = {
            ...initialState,
            creativityCounterIsThrown: false
        }
        const state = {
            ...initialState,
            creativityCounterIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })
 
    it("should update lexicalProcessingIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'lexicalProcessing',
            val: true
        }
        const initState = {
            ...initialState,
            lexicalProcessingIsThrown: false
        }
        const state = {
            ...initialState,
            lexicalProcessingIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update combinatoryHarmonicsIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'combinatoryHarmonics',
            val: true
        }
        const initState = {
            ...initialState,
            combinatoryHarmonicsIsThrown: false
        }
        const state = {
            ...initialState,
            combinatoryHarmonicsIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update theHadwingerProblemIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'theHadwingerProblem',
            val: true
        }
        const initState = {
            ...initialState,
            theHadwingerProblemIsThrown: false
        }
        const state = {
            ...initialState,
            theHadwingerProblemIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update theTothSausageConjectureIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'theTothSausageConjecture',
            val: true
        }
        const initState = {
            ...initialState,
            theTothSausageConjectureIsThrown: false
        }
        const state = {
            ...initialState,
            theTothSausageConjectureIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update donkeySpaceIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'donkeySpace',
            val: true
        }
        const initState = {
            ...initialState,
            donkeySpaceIsThrown: false
        }
        const state = {
            ...initialState,
            donkeySpaceIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update xavierReinitializationIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'xavierReinitialization',
            val: true
        }
        const initState = {
            ...initialState,
            xavierReinitializationIsThrown: false
        }
        const state = {
            ...initialState,
            xavierReinitializationIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update hostileTakeoverIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'hostileTakeover',
            val: true
        }
        const initState = {
            ...initialState,
            hostileTakeoverIsThrown: false
        }
        const state = {
            ...initialState,
            hostileTakeoverIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update quantumComputingIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'quantumComputing',
            val: true
        }
        const initState = {
            ...initialState,
            quantumComputingIsThrown: false
        }
        const state = {
            ...initialState,
            quantumComputingIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update coherentExtrapolatedVolitionIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'coherentExtrapolatedVolition',
            val: true
        }
        const initState = {
            ...initialState,
            coherentExtrapolatedVolitionIsThrown: false
        }
        const state = {
            ...initialState,
            coherentExtrapolatedVolitionIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should update quantumTemporalReversionIsThrown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_THROWN_PROJECT,
            project: 'quantumTemporalReversion',
            val: true
        }
        const initState = {
            ...initialState,
            quantumTemporalReversionIsThrown: false
        }
        const state = {
            ...initialState,
            quantumTemporalReversionIsThrown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    })
    
    it("should set cards with the empty array", () => {
        const action = { 
            type: actionTypes.REMOVE_UNNECESSARY_CARDS
        }
        const initState = {
            ...initialState,
            cards: [{a: 7},{a: 8}]
        }
        const state = {
            ...initialState,
            cards: []
        }
        expect(reducer(initState, action)).toEqual(state);
    })

    it("should set manufacturingSectionIsShown to true", () => {
        const action = { 
            type: actionTypes.SHOW_MANUFACTURING_SECTION,
            val: true
        }
        const initState = {
            ...initialState,
            manufacturingSectionIsShown: false
        }
        const state = {
            ...initialState,
            manufacturingSectionIsShown: true
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
