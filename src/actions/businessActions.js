import * as actionTypes from '../constants/actionTypes';

export function checkButtons() {
    return { 
        type: actionTypes.CHECK_BUTTONS
    };
};

export function sellPaperclips(priceOfPaperclip, delay, wire) {
    return { 
        type: actionTypes.START_SELLING,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay,
        wire: wire
    };
};

export function makePaperclip(priceOfPaperclip, delay, wire) {
    return {
        type: actionTypes.MAKE_PAPERCLIP,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay,
        wire: wire
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

export function checkExistenceOfWire(wire) {
    return { 
        type: actionTypes.CHECK_EXISTENCE_OF_WIRE,
        wire: wire
    };
};

export function stop() {
    return { 
        type: actionTypes.STOP
    };
};

export function autoPaperclips(priceOfPaperclip, delay, delay2, wire) {
    return { 
        type: actionTypes.AUTO_PAPERCLIPS,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay,
        delayAutoPaperClippers: delay2,
        wire: wire
    };
};

export function autoPaperclipsStart(priceOfPaperclip, delay, delay2, wire) {
    return { 
        type: actionTypes.AUTO_PAPERCLIPS_START,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay,
        delayAutoPaperClippers: delay2,
        wire: wire
    };
};

export function autoClippersAddOne() {
    return { 
        type: actionTypes.AUTO_CLIPPERS_ADD_ONE
    };
};

export function setAutoClipperInitPrice() {
    return { 
        type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE
    };
};

export function toggleAutoClippersButton() {
    return { 
        type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
    };
};

export function trustPlusOne() {
    return { 
        type: actionTypes.TRUST_PLUS_ONE,
    };
};

export function repeatAutoPaperClippers(priceOfPaperclip, delay, delay2, wire) {
    return { 
        type: actionTypes.REPEAT_AUTO_PAPER_CLIPPERS,
        priceOfPaperclip: priceOfPaperclip,
        delay: delay,
        delayAutoPaperClippers: delay2,
        wire: wire
    };
};

export function increaseOps() {
    return { 
        type: actionTypes.INCREASE_OPS
    };
};

export function increaseProcessors() {
    return { 
        type: actionTypes.INCREASE_PROCESSORS
    };
};

export function increaseProcessorsMemory() {
    return { 
        type: actionTypes.INCREASE_PROCESSORS_MEMORY
    };
};

export function increaseCreativity() {
    return { 
        type: actionTypes.INCREASE_CREATIVITY
    };
};

export function initProjects(x, y, z) {
    return { 
        type: actionTypes.INIT_PROJECTS,
        card1: x,
        card2: y,
        card3: z
    };
};

export function checkCardValidity(id, val, i) {
    return { 
        type: actionTypes.CHECK_CARD_VALIDITY,
        cardId: id,
        valid: val,
        i: i
    };
};

export function deleteCard(id) {
    return { 
        type: actionTypes.DELETE_CARD,
        cardId: id
    };
};

export function showRevTracker(price) {
    return { 
        type: actionTypes.SHOW_REV_TRACKER,
        price: price
    };
};

export function addProject(obj) {
    return { 
        type: actionTypes.ADD_PROJECT,
        project: obj
    };
};

export function removePriceOfProjectOps(price) {
    return { 
        type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS,
        ops: price
    };
};

export function improveAutoClippers(val) {
    return { 
        type: actionTypes.IMPROVE_AUTO_PAPER_CLIPPER,
        val: val
    };
};

export function toggleMakePaperclipButton(val) {
    return { 
        type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
        val: val
    };
};

export function improveWireExtrusion(val) {
    return { 
        type: actionTypes.IMPROVE_WIRE_EXTRUSION,
        val: val
    };
};

export function startCreativityCounter() {
    return { 
        type: actionTypes.START_CREATIVITY_COUNTER
    };
};



export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}
