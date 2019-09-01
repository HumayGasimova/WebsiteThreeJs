import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

const initialState = {
    paperClips: 0
}

const addPaperclip = (state, action) => {
    return updateObject(state, {
       paperClips: state.paperClips + 1
    });
}

const generalReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MAKE_PAPERCLIP:
            return addPaperclip(state, action);
        default: 
            return state;
    }
}

export default  generalReducer;
