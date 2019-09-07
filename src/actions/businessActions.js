import * as actionTypes from '../constants/actionTypes';

export function sellPaperclips(paperclipsInStock, priceOfPaperclip, funds) {
    return { 
        type: actionTypes.START_SELLING,
        paperclipsInStock: paperclipsInStock,
        priceOfPaperclip: priceOfPaperclip,
        funds: funds
    };
};

export function makePaperclip(priceOfPaperclip) {
    return {
        type: actionTypes.MAKE_PAPERCLIP,
        priceOfPaperclip: priceOfPaperclip
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

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}
