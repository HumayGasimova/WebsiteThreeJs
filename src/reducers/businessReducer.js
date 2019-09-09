import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

const initialState = {
    paperClips: 0,
    funds: 0,
    paperclipPrice: 0.50,
    unsoldInventory: [],
    maxPublicDemand: 800,
    publicDemand: 16,
    marketingLevel: 1,
    marketingCost: 100,
    marketingButtonDisabled: true,
    delay: 1000,
    wire: 1000,
    wirePrice: 20,
    wireButtonDisabled: true,
    autoClippersPerSec: 0,
    autoPaperclips: 0,
    autoClipperInitPrice: 0,
    autoClipperPrice: 6.1
}

const addPaperclip = (state) => {
    let updatedInventory = state.unsoldInventory;
    updatedInventory.push(' ');

    return updateObject(state, {
       paperClips: state.paperClips + 1,
       unsoldInventory: updatedInventory,
       wire: state.wire - 1
    });
}

const updateFunds = (state, action) => {
    let updatedFunds = state.funds + action.value;
    return updateObject(state, {
       funds: +updatedFunds.toFixed(2)
    });
}

const updateUnsoldInventory = (state, action) => {
   let updatedInventory = state.unsoldInventory;
    updatedInventory.splice(-1,1)
    return updateObject(state, {
        unsoldInventory: updatedInventory
    });
}

const lowerPrice = (state) => {
    let paperclipPrice = state.paperclipPrice - 0.01;
    return updateObject(state, {
        paperclipPrice: +paperclipPrice.toFixed(2)
    });
}

const raisePrice = (state) => {
    let paperclipPrice = state.paperclipPrice + 0.01;
    return updateObject(state, {
        paperclipPrice: +paperclipPrice.toFixed(2)
    });
}

const updatePublicDemand = (state) => {
    let updatedPublicDemand = state.maxPublicDemand/(state.paperclipPrice*100);
    return updateObject(state, {
        publicDemand: +updatedPublicDemand.toFixed()
    });
}

const toggleMarketingButton = (state) => {
    let isDisable = state.funds <= state.marketingCost;
    return updateObject(state, {
        marketingButtonDisabled: isDisable
    });
}

const marketingNextLevel = (state) => {
    let updatedFunds = state.funds - state.marketingCost;
    return updateObject(state, {
        marketingLevel: +state.marketingLevel + 1,
        marketingCost: +state.marketingCost * 2,
        funds: +updatedFunds
    });
}

const updateMaxPublicDemand = (state) => {
    let updatedMaxPublicDemand = state.maxPublicDemand + state.maxPublicDemand * 0.1
    return updateObject(state, {
        maxPublicDemand: updatedMaxPublicDemand
    });
}

const buyWire = (state) => {
    return updateObject(state, {
        wire: state.wire + 1000,
        funds: state.funds - state.wirePrice
    });
}

const randomWirePrice = (state, action) => {
    return updateObject(state, {
        wirePrice: action.value
    });
}

const toggleWireButton = (state) => {
    let isDisable = state.funds <= state.wirePrice;
    return updateObject(state, {
        wireButtonDisabled: isDisable
    });
}

const autoClippersAddOne = (state) => {
    let updatedAutoClipperPrice;
    let updatedFunds
    if(state.autoClippersPerSec === 0){
        updatedAutoClipperPrice = state.autoClipperPrice;
        updatedFunds = state.funds - state.autoClipperInitPrice;
    }else{
        updatedAutoClipperPrice = +(state.autoClipperPrice + (state.autoClipperPrice * 0.018)).toFixed(2);
        updatedFunds = state.funds - state.autoClipperPrice;
    }

    return updateObject(state, {
        autoClippersPerSec: state.autoClippersPerSec + 1,
        autoClipperPrice: updatedAutoClipperPrice,
        funds: +updatedFunds
    });
}

const autoPaperclips = (state) => {
    return updateObject(state, {
        autoPaperclips: state.autoPaperclips + 1
    });
}

const setAutoClipperInitPrice = (state) => {

    return updateObject(state, {
        autoClipperInitPrice: state.funds >= 5 ? 5 : state.autoClipperInitPrice
    });
}


// const wirePrice = (state, action) => {
//     return updateObject(state, {
//         wirePrice: action.value
//     });
// }



const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MAKE_PAPERCLIP:
            return addPaperclip(state, action);
        case actionTypes.START_SELLING:
            return state;
        case actionTypes.UPDATE_FUNDS:
            return updateFunds(state, action);
        case actionTypes.UPDATE_UNSOLD_INVENTORY:
            return updateUnsoldInventory(state, action);
        case actionTypes.LOWER_PRICE:
            return lowerPrice(state, action);
        case actionTypes.RAISE_PRICE:
            return raisePrice(state, action);
        case actionTypes.MARKETING:
            return state;
        case actionTypes.UPDATE_PUBLIC_DEMAND:
            return updatePublicDemand(state, action);
        case actionTypes.TOGGLE_MARKETING_BUTTON:
            return toggleMarketingButton(state, action);
        case actionTypes.MARKETING_NEXT_LEVEL:
            return marketingNextLevel(state, action);
        case actionTypes.UPDATE_MAX_PUBLIC_DEMAND:
            return updateMaxPublicDemand(state, action);
        case actionTypes.START_BUYING_WIRE:
            return state;
        case actionTypes.BUY_WIRE:
            return buyWire(state, action);
        case actionTypes.RANDOM_WIRE_PRICE:
            return randomWirePrice(state, action);
        case actionTypes.TOGGLE_WIRE_BUTTON:
            return toggleWireButton(state, action); 
        case actionTypes.AUTO_PAPERCLIPS_START:
            return state;   
        case actionTypes.AUTO_CLIPPERS_ADD_ONE:
            return autoClippersAddOne(state, action); 
        case actionTypes.AUTO_PAPERCLIPS:
            return autoPaperclips(state, action); 
        case actionTypes.SET_AUTO_CLIPPER_INIT_PRICE:
            return setAutoClipperInitPrice(state, action); 
        default: 
            return state;
    }
}

export default businessReducer;
