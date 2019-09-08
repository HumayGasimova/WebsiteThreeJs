import * as actionTypes from '../constants/actionTypes';

export function sellPaperclips(priceOfPaperclip, delay) {
    return { 
        type: actionTypes.START_SELLING,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay
    };
};

export function makePaperclip(priceOfPaperclip, delay) {
    return {
        type: actionTypes.MAKE_PAPERCLIP,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay
    }
};

export function updateFunds(value) {
    return { 
        type: actionTypes.UPDATE_FUNDS,
        value: value
    };
};

export function updateUnsoldInventory() {
    return { 
        type: actionTypes.UPDATE_UNSOLD_INVENTORY
    };
};

export function lowerPrice() {
    return { 
        type: actionTypes.LOWER_PRICE
    };
};

export function raisePrice() {
    return { 
        type: actionTypes.RAISE_PRICE
    };
};

export function updatePublicDemand() {
    return { 
        type: actionTypes.UPDATE_PUBLIC_DEMAND
    };
};

export function toggleMarketingButton() {
    return { 
        type: actionTypes.TOGGLE_MARKETING_BUTTON
    };
};

export function marketing() {
    return { 
        type: actionTypes.MARKETING
    };
};

export function marketingNextLevel() {
    return { 
        type: actionTypes.MARKETING_NEXT_LEVEL
    };
};

export function updateMaxPublicDemand() {
    return { 
        type: actionTypes.UPDATE_MAX_PUBLIC_DEMAND
    };
};

export function startBuyingWire() {
    return { 
        type: actionTypes.START_BUYING_WIRE
    };
};

export function buyWire() {
    return { 
        type: actionTypes.BUY_WIRE
    };
};

export function randomWirePrice(value) {
    return { 
        type: actionTypes.RANDOM_WIRE_PRICE,
        value: value
    };
};

export function toggleWireButton() {
    return { 
        type: actionTypes.TOGGLE_WIRE_BUTTON
    };
};

export function autoClippersAddOne() {
    return { 
        type: actionTypes.AUTO_CLIPPERS_ADD_ONE
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}
