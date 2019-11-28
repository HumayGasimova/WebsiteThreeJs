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

    it("should update x and y with the value passed through the action", () => {
        const action = { 
            type: actionTypes.CAPTURE_X_Y,
            x: 731,
            y: 373
        }
        const initState = {
            ...initialState, 
            x: 456,
            y: 374
        }
        const state = {
            ...initialState, 
            x: 731,
            y: 373
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update colorPickerIsShown with the value passed through the action", () => {
        const action = { 
            type: actionTypes.TOGGLE_COLOR_PICKER,
            val: true
        }
        const initState = {
            ...initialState, 
            colorPickerIsShown: false
        }
        const state = {
            ...initialState, 
            colorPickerIsShown: true
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update bgColor with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_BG_COLOR,
            color: "pink"
        }
        const initState = {
            ...initialState, 
            bgColor: "blue"
        }
        const state = {
            ...initialState, 
            bgColor: "pink"
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update buttonsName with the value passed through the action", () => {
        const action = { 
            type: actionTypes.WHICH_BUTTON,
            name: "bgColor"
        }
        const initState = {
            ...initialState, 
            buttonsName: ""
        }
        const state = {
            ...initialState, 
            buttonsName: "bgColor"
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update activeToolButton with the value passed through the action", () => {
        const action = { 
            type: actionTypes.CHOOSE_TOOL,
            tool: "eraser"
        }
        const initState = {
            ...initialState, 
            activeToolButton: "pencil"
        }
        const state = {
            ...initialState, 
            activeToolButton: "eraser"
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if tool is pencil) update sizePencil with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_SIZE,
            tool: "pencil",
            val: 45
        }
        const initState = {
            ...initialState, 
            sizePencil: 23
        }
        const state = {
            ...initialState, 
            sizePencil: 45
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if tool is eraser) update sizeEraser with the value passed through the action", () => {
        const action = { 
            type: actionTypes.GET_SIZE,
            tool: "eraser",
            val: 35
        }
        const initState = {
            ...initialState, 
            sizeEraser: 17
        }
        const state = {
            ...initialState, 
            sizeEraser: 35
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Xup) update canvasWidthScreen by adding 1", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Xup"
        }
        const initState = {
            ...initialState, 
            canvasWidthScreen: 756
        }
        const state = {
            ...initialState, 
            canvasWidthScreen: 757
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Xdown and canvasWidthScreen is greater than 700) update canvasWidthScreen by subtracting 1", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Xdown"
        }
        const initState = {
            ...initialState, 
            canvasWidthScreen: 1473
        }
        const state = {
            ...initialState, 
            canvasWidthScreen: 1472
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Xdown and canvasWidthScreen is less than 700) do nothing", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Xdown"
        }
        const initState = {
            ...initialState, 
            canvasWidthScreen: 300
        }
        const state = {
            ...initialState, 
            canvasWidthScreen: 300
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Yup) update canvasHeightScreen by adding 1", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Yup"
        }
        const initState = {
            ...initialState, 
            canvasHeightScreen: 737
        }
        const state = {
            ...initialState, 
            canvasHeightScreen: 738
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Ydown and canvasHeightScreen is greater than 400) update canvasHeightScreen by subtracting 1", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Ydown"
        }
        const initState = {
            ...initialState, 
            canvasHeightScreen: 747
        }
        const state = {
            ...initialState, 
            canvasHeightScreen: 746
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should (if arrow is Ydown and canvasHeightScreen is less than 400) do nothing", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
            arrow: "Ydown"
        }
        const initState = {
            ...initialState, 
            canvasHeightScreen: 200
        }
        const state = {
            ...initialState, 
            canvasHeightScreen: 200
        }
        expect(reducer(initState, action)).toEqual(state);
    });

    it("should update canvasWidth with the value of canvasWidthScreen and canvasHeight with the value of canvasHeightScreen", () => {
        const action = { 
            type: actionTypes.UPDATE_CANVAS_SIZE
        }
        const initState = {
            ...initialState, 
            canvasWidthScreen: 385,
            canvasHeightScreen: 729,
            canvasWidth: 482,
            canvasHeight: 1472
        }
        const state = {
            ...initialState, 
            canvasWidthScreen: 385,
            canvasHeightScreen: 729,
            canvasWidth: 385,
            canvasHeight: 729
        }
        expect(reducer(initState, action)).toEqual(state);
    });

});
