import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

const initialState = {
    paperClips: 0,
    funds: 100000, //pomenat na 0
    paperclipPrice: 0.50,
    unsoldInventory: 0,
    maxPublicDemand: 800,
    publicDemand: 16,
    marketingLevel: 1,
    marketingCost: 100,
    marketingButtonDisabled: true,
    delay: 1000,
    wire: 1000,
    wireToAdd: 1000,
    wirePrice: 20,
    wireButtonDisabled: true,
    autoClippersPerSec: 0,
    autoPaperclips: 0,
    autoClipperInitPrice: 0,
    autoClipperPrice: 6.1,
    autoClippersButtonDisabled: true,
    autoClipperOn: false,
    prevTrust: 3000,
    trust: 2,
    clipsToBuyTrust: 3000,
    delayAutoPaperClippers: 1000,
    ops: 0,
    opsMax: 10,
    processorsNumber: 1,
    processorsMemory: 1,
    creativity: 0,
    cards: [],
    revTracker: false,
    makePaperclipDisabled: false,
    creativityTurnOn: false,
    listInvestments: ["Low Risk","Med Risk","High Risk"],
    listStrategicModeling: ["Pick a Start","RANDOM"],
    noWire: false,
    showInvestmentEngine: true,
    showStrategicModeling: true,
    comments: ['Welcome to Universal Paperclips'],
    showDropdownStrategicModeling: false,
    showDropdownInvestments: false,
    showQuantumComputing: false,
    showQCompMessage: 0,
    showChip: false,
    changedToQOps: false,
    // qOps: -360,
    currentQOps: -360,
    chips: [],
    time: 0,
    wireBuyerProjectIsShown: false,
    wireBuyerIsShown: false,
    autoWireBuyerIsOn: true
}

const addPaperclip = (state) => {
    let updateWire = +state.wire >= 1 ? +state.wire - 500 : 0   // 500 pomenat na 1

    return updateObject(state, {
       paperClips: state.paperClips + 100, //pomenat na 1
       unsoldInventory: state.unsoldInventory + 1,
       wire: +updateWire.toFixed(2)
    });
}

const updateFunds = (state, action) => {
    let updatedFunds = state.funds + action.value;
    return updateObject(state, {
       funds: +updatedFunds.toFixed(2)
    });
}

const updateUnsoldInventory = (state, action) => {
//    let updatedInventory = state.unsoldInventory;
    // updatedInventory.splice(-1,1)
    return updateObject(state, {
        unsoldInventory: state.unsoldInventory - 1
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
    let isDisable = state.funds < state.marketingCost;
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
    let updatedFunds = +state.funds - +state.wirePrice;
    return updateObject(state, {
        wire: +state.wire + +state.wireToAdd,
        funds: +updatedFunds.toFixed(2)
    });
}

const randomWirePrice = (state, action) => {
    return updateObject(state, {
        wirePrice: action.value
    });
}

const toggleWireButton = (state) => {
    let isDisable = state.funds < state.wirePrice;
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
        updatedFunds = +state.funds - +state.autoClipperPrice;
    }

    return updateObject(state, {
        autoClippersPerSec: state.autoClippersPerSec + 1,
        autoClipperPrice: updatedAutoClipperPrice,
        funds: +updatedFunds.toFixed(2),
        delayAutoPaperClippers: state.delayAutoPaperClippers / 1.01,
        autoClipperOn: true
        
    });
}

const setAutoClipperInitPrice = (state) => {
    return updateObject(state, {
        autoClipperInitPrice: state.funds >= 5 ? 5 : state.autoClipperInitPrice
    });
}

const toggleAutoClippersButton = (state) => {
    let isDisable
    if(state.autoClippersPerSec === 0){
        isDisable = state.funds < state.autoClipperInitPrice;
    }else{
        isDisable = state.funds < state.autoClipperPrice;
    }
    return updateObject(state, {
       autoClippersButtonDisabled: isDisable
    });
}

const trustPlusOne = (state) => {
    let updatedPrevTrust = state.prevTrust;
    let updatedTrust = state.trust;
    let updatedClipsToBuyTrust = state.clipsToBuyTrust;

    if(state.paperClips >= state.clipsToBuyTrust){
        updatedTrust = state.trust + 1;
        if(state.trust === 2 ){
            updatedClipsToBuyTrust = 5000;
        }else{
            updatedPrevTrust = state.clipsToBuyTrust;
            updatedClipsToBuyTrust = state.prevTrust + state.clipsToBuyTrust;
        }
    }
    return updateObject(state, {
        prevTrust: updatedPrevTrust,
        trust: updatedTrust,
        clipsToBuyTrust: updatedClipsToBuyTrust
    });
}

const trustPlusOneFromProject = (state) => {
    return updateObject(state, {
        trust: state.trust + 1
    });
}

const increaseOps = (state) => {
    return updateObject(state, {
        ops: state.ops + 1
    });
}

const decreaseOps = (state) => {
    return updateObject(state, {
        ops: state.ops - 1
    });
}

const increaseProcessors = (state) => {
    return updateObject(state, {
        processorsNumber: state.processorsNumber + 1
    });
}

const increaseProcessorsMemory = (state) => {
    return updateObject(state, {
        processorsMemory: state.processorsMemory + 1,
        opsMax: state.opsMax + 1000
    });
}

const increaseCreativity = (state) => {
    return updateObject(state, {
        creativity: state.creativity + 1
    });
}

const initProjects = (state, action) => {
    let updatedCards = state.cards;
    updatedCards.push(action.card1, action.card2, action.card3);
    return updateObject(state, {
        cards: updatedCards
    });
}

const checkCardValidity = (state, action) => {
    let updatedCards = [...state.cards];
    let updatedCard = updatedCards.find(card => card.id === action.cardId);
    updatedCard.valid = action.valid;
    updatedCards[action.i] = updatedCard;

    // console.log("before", state.cards)
    // console.log("after",updatedCards)
    return updateObject(state, {
        cards: updatedCards
    });
}

const deleteCard = (state, action) => {
    let oldCards = [...state.cards];
    let updatedCards = oldCards.filter(x => x.id !== action.cardId);

    return updateObject(state, {
        cards: updatedCards
    });
}

const showRevTracker = (state, action) => {
    return updateObject(state, {
        revTracker: true,
        ops: state.ops - action.price
    });
}

const addProject = (state, action) => {
    let updatedCards = [...state.cards];
    updatedCards.push(action.project);

    return updateObject(state, {
        cards: updatedCards
    });
}

const removePriceOfProjectOps = (state, action) => {
    return updateObject(state, {
        ops: state.ops - action.ops
    });
}

const removePriceOfProjectCreat = (state, action) => {
     return updateObject(state, {
        creativity: state.creativity - action.creativity
    });
}

const removePriceOfProjectOpsAndCreat = (state, action) => {
    return updateObject(state, {
        ops: state.ops - action.ops,
        creativity: state.creativity - action.creativity
    });
}

const removePriceOfProjectTrust = (state, action) => {
    return updateObject(state, {
        trust: state.trust - action.trust
    });
}


const improveAutoClippers = (state, action) => {
    let updatedAutoPaperClippers = state.delayAutoPaperClippers - (state.delayAutoPaperClippers * action.val / 100);
    return updateObject(state, {
       delayAutoPaperClippers: updatedAutoPaperClippers
    });
}

const toggleMakePaperclipButton = (state, action) => {
    return updateObject(state, {
        makePaperclipDisabled: action.val
    });
}

const improveWireExtrusion = (state, action) => {
    let updatedWireToAdd = +state.wireToAdd + (+state.wireToAdd * action.val / 100);
    return updateObject(state, {
        wireToAdd: updatedWireToAdd
    });
}
const creativityTurnOn = (state) => {
    return updateObject(state, {
        creativityTurnOn: true
    });
}

const wireExists = (state, action) => {
    return updateObject(state, {
        noWire: action.val
    });
}

const improveMarketing = (state, action) => {
    let updatedMaxPublicDemand = +state.maxPublicDemand + (+state.maxPublicDemand * action.val / 100);
    return updateObject(state, {
        maxPublicDemand: +updatedMaxPublicDemand.toFixed()
    });
}

const showInvestEngine = (state, action) => {
    return updateObject(state, {
        showInvestmentEngine: true
    });
}

const showStrategicModeling = (state, action) => {
    return updateObject(state, {
        showStrategicModeling: true
    });
}

const sendCommentToTerminal = (state, action) => {
    let updatedComments = [...state.comments];
    if(updatedComments.length >= 5){
        updatedComments.push(action.comment)
        updatedComments.splice(0,1);
    }else{
        updatedComments.push(action.comment);
    }

    return updateObject(state, {
        comments: updatedComments
    });
}

const addNewStrategy = (state, action) => {
    let updatedListStrategicModeling = [...state.listStrategicModeling];
    updatedListStrategicModeling.push(action.strategy);
    
    return updateObject(state, {
        listStrategicModeling: updatedListStrategicModeling
    });
}

const toggleDropdownInvestments = (state, action) => {
    return updateObject(state, {
        showDropdownInvestments: !state.showDropdownInvestments
    });
}

const toggleDropdownStrategicModeling = (state, action) => {
    return updateObject(state, {
        showDropdownStrategicModeling: !state.showDropdownStrategicModeling
    });
}

const closeDropdowns = (state, action) => {
    return updateObject(state, {
        showDropdownInvestments: false,
        showDropdownStrategicModeling: false
    });
}

const showQuantumComputing = (state, action) => {
    return updateObject(state, {
        showQuantumComputing: true
    });
}

const showQuantCompMessage = (state, action) => {
    return updateObject(state, {
        showQCompMessage: state.showQCompMessage + 1
    });
}

const addChip = (state, action) => {
    let updatedChips = [...state.chips]
    updatedChips.push(action.obj)

    return updateObject(state, {
        chips: updatedChips
    });
}

const toggleChip = (state, action) => {
    let updatedChips = [...state.chips];
    let chip = updatedChips.find(x => x.chipsNumber === action.chipsNumber);
    let chipsIndex = updatedChips.findIndex(x=> x.chipsNumber === action.chipsNumber);
    chip.showChip = action.val;
    updatedChips.splice(chipsIndex, 1, chip)
    console.log(state.chips)
    console.log(chip)
    console.log(updatedChips)
    return updateObject(state, {
        chips: updatedChips
    });
}

const changeToQOps = (state, action) => {
    return updateObject(state, {
        changedToQOps: true
    });
}

const addQOps = (state, action) => {
    let updatedChips = [...state.chips];
    let chip = updatedChips.find(x => x.chipsNumber === action.chipsNumber);
    let chipsIndex = updatedChips.findIndex(x=> x.chipsNumber === action.chipsNumber);
    chip.qOps = chip.qOps + 1;
    updatedChips.splice(chipsIndex, 1, chip)

    return updateObject(state, {
        qOps: updatedChips
    });
}

const subtractQOps = (state, action) => {
    let updatedChips = [...state.chips];
    let chip = updatedChips.find(x => x.chipsNumber === action.chipsNumber);
    let chipsIndex = updatedChips.findIndex(x=> x.chipsNumber === action.chipsNumber);
    chip.qOps = chip.qOps - 1;
    updatedChips.splice(chipsIndex, 1, chip)

    return updateObject(state, {
        qOps: updatedChips
    });
}

const captureCurrentQOps = (state, action) => {
    return updateObject(state, {
        currentQOps: action.val
    });
}

const updateOps = (state, action) => {
    return updateObject(state, {
        ops: state.ops + action.val
    });
}

const startTimer = (state, action) => {
    return updateObject(state, {
        time: state.time + 1
    });
}

const showAutoWireBuyer = (state, action) => {
    return updateObject(state, {
        wireBuyerIsShown: true
    });
}

const toggleWireBuyerProject = (state, action) => {
    return updateObject(state, {
        wireBuyerProjectIsShown: true
    });
}

const toggleAutoWireBuyer = (state, action) => {
    return updateObject(state, {
        autoWireBuyerIsOn: !state.autoWireBuyerIsOn
    });
}


// const addCaptureVal = (state, action) => {
//     if(action.val === 0){
//         return updateObject(state, {
//             captureNumber: 0
//         });
//     }else{
//         return updateObject(state, {
//             captureNumber: state.captureNumber + action.val
//         });
//     }
// }




const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHECK_BUTTONS:
            return state;
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
        case actionTypes.CHECK_EXISTENCE_OF_WIRE:
            return state; 
        case actionTypes.STOP:
            return state; 
        case actionTypes.AUTO_PAPERCLIPS:
            return state;
        case actionTypes.AUTO_CLIPPERS_ADD_ONE:
            return autoClippersAddOne(state, action); 
        case actionTypes.AUTO_PAPERCLIPS_START:
            return state;  
        case actionTypes.REPEAT_AUTO_PAPER_CLIPPERS:
            return state;
        case actionTypes.SET_AUTO_CLIPPER_INIT_PRICE:
            return setAutoClipperInitPrice(state, action); 
        case actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON:
            return toggleAutoClippersButton(state, action); 
        case actionTypes.TRUST_PLUS_ONE:
            return trustPlusOne(state, action); 
        case actionTypes.TRUST_PLUS_ONE_FROM_PROJECT:
            return trustPlusOneFromProject(state, action); 
        case actionTypes.INCREASE_OPS:
            return increaseOps(state, action); 
        case actionTypes.START_DECREASING_OPS:
            return state; 
        case actionTypes.STOP_DECREASING_OPERATIONS:
            return state; 
        case actionTypes.DECREASE_OPS:
            return decreaseOps(state, action); 
        case actionTypes.INCREASE_PROCESSORS:
            return increaseProcessors(state, action); 
        case actionTypes.INCREASE_PROCESSORS_MEMORY:
            return increaseProcessorsMemory(state, action); 
        case actionTypes.INCREASE_CREATIVITY:
            return increaseCreativity(state, action); 
        case actionTypes.INIT_PROJECTS:
            return initProjects(state, action); 
        case actionTypes.CHECK_CARD_VALIDITY:
            return checkCardValidity(state, action); 
        case actionTypes.DELETE_CARD:
            return deleteCard(state, action); 
        case actionTypes.SHOW_REV_TRACKER:
            return showRevTracker(state, action); 
        case actionTypes.ADD_PROJECT:
            return addProject(state, action);
        case actionTypes.REMOVE_PRICE_OF_PROJECT_OPS:
            return removePriceOfProjectOps(state, action);  
        case actionTypes.REMOVE_PRICE_OF_PROJECT_CREAT:
            return removePriceOfProjectCreat(state, action);  
        case actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_CREAT:
            return removePriceOfProjectOpsAndCreat(state, action);  
        case actionTypes.IMPROVE_AUTO_PAPER_CLIPPER:
            return improveAutoClippers(state, action);  
        case actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON:
            return toggleMakePaperclipButton(state, action);  
        case actionTypes.IMPROVE_WIRE_EXTRUSION:
            return improveWireExtrusion(state, action);  
        case actionTypes.START_CREATIVITY_COUNTER:
            return state;  
        case actionTypes.CREATIVITY_TURN_ON:
            return creativityTurnOn(state, action);  
        case actionTypes.WIRE_EXISTS:
            return wireExists(state, action);
        case actionTypes.ADD_LEXICAL_PROCESSING:
            return state;  
        case actionTypes.ADD_COMBINATORY_HARMONICS:
            return state;
        case actionTypes.ADD_THE_HADWINGER_PROBLEM:
            return state;  
        case actionTypes.ADD_THE_TOTH_SAUSAGE_CONJECTURE:
            return state;
        case actionTypes.ADD_DONKEY_SPACE:
            return state;
        case actionTypes.IMPROVE_MARKETING:
            return improveMarketing(state, action);
        case actionTypes.SHOW_INVESTMENT_ENGINE:
            return showInvestEngine(state, action);
        case actionTypes.SHOW_STRATEGIC_MODELING:
            return showStrategicModeling(state, action);
        case actionTypes.REMOVE_PRICE_OF_PROJECT_TRUST:
            return removePriceOfProjectTrust(state, action);
        case actionTypes.THROW_PROJECT:
            return state; 
        case actionTypes.SEND_COMMENT_TO_TERMINAL:
            return sendCommentToTerminal(state, action);
        case actionTypes.ADD_NEW_STRATEGY:
            return addNewStrategy(state, action);
        case actionTypes.TOGGLE_DROPDOWN_INVESTMENTS:
            return toggleDropdownInvestments(state, action);
        case actionTypes.TOGGLE_DROPDOWN_STRATEGIC_MODELING:
            return toggleDropdownStrategicModeling(state, action);
        case actionTypes.CLOSE_DROPDOWNS:
            return closeDropdowns(state, action);
        case actionTypes.SHOW_QUANTUM_COMPUTING:
            return showQuantumComputing(state, action);
        case actionTypes.SHOW_QUANT_COMP_MESSAGE:
            return showQuantCompMessage(state, action);
        case actionTypes.TOGGLE_CHIP:
            return toggleChip(state, action);
        case actionTypes.CHANGE_TO_Q_OPS:
            return changeToQOps(state, action);
        case actionTypes.START_ADDING_Q_OPS:
                return state;
        case actionTypes.ADD_Q_OPS:
            return addQOps(state, action);
        case actionTypes.STOP_ADDING_Q_OPS:
            return state;
        case actionTypes.START_SUBTRACTING_Q_OPS:
            return state;
        case actionTypes.SUBTRACT_Q_OPS:
            return subtractQOps(state, action);
        case actionTypes.STOP_SUBTRACTING_Q_OPS:
            return state;
        case actionTypes.CAPTURE_CURRENT_Q_OPS:
            return captureCurrentQOps(state, action);
        case actionTypes.ADD_CHIP:
            return addChip(state, action);
        case actionTypes.UPDATE_OPS:
            return updateOps(state, action);
        case actionTypes.START_TIMER:
            return startTimer(state, action);
        case actionTypes.START_DECREASING_OPERATIONS:
            return state;
        case actionTypes.CLICK_WIRE_BUTTON:
            return state;
        case actionTypes.SHOW_AUTO_WIRE_BUYER:
            return showAutoWireBuyer(state, action);
        case actionTypes.TOGGLE_WIRE_BUYER_PROJECT:
            return toggleWireBuyerProject(state, action);
        case actionTypes.AUTO_WIRE_BUYER:
            return state;
        case actionTypes.TOGGLE_AUTO_WIRE_BUYER:
            return toggleAutoWireBuyer(state, action);
        default: 
            return state;
    }
}

export default businessReducer;

// const addProject = (state, action) => {
//     let updatedCards = [...state.cards];

// //     let a = [1, 2, 3];
// // let copy1 = [...a];
// // let copy2 = a.slice();
// // let copy3 = a.concat();

//     updatedCards.push('');
//     return updateObject(state, {
//       cards: updatedCards
//     });
// }
