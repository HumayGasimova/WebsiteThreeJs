
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

    it("should update delayAutoPaperClippers using formula and value passed through the action", () => {
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

    it("should update wireToAdd using formula and value passed through the action", () => {
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

    it("should update maxPublicDemand using formula and value passed through the action and delayUnsoldInventaryConst using formula", () => {
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
            type: actionTypes.SHOW_INVESTMENT_ENGINE
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
            type: actionTypes.SHOW_STRATEGIC_MODELING
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

    it("should update trust by removing value passed through the action", () => {
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

    it("should add new strategy to listStrategicModeling", () => {
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

    it("should set showQuantumComputing to true", () => {
        const action = { 
            type: actionTypes.SHOW_QUANTUM_COMPUTING
        }
        const initState = {
            ...initialState, 
            showQuantumComputing: false
        }
        const state = {
            ...initialState, 
            showQuantumComputing: true
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

    it("should update ops by adding value passed throught th action", () => {
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
