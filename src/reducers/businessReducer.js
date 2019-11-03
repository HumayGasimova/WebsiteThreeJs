import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

  import * as Utility from '../utility'

export const initialState = {
    paperClips: 2000, //0
    clipsPerSec: 0,
    funds: 1200, //pomenat na 0
    paperclipPrice: 0.5, // 0.5
    unsoldInventory: 0,
    maxPublicDemand: 800,
    publicDemand: 16,
    marketingLevel: 1,
    marketingCost: 100,
    marketingButtonDisabled: true,
    delay: 1000,
    wire: 1000, //1000
    wireToAdd: 1000,
    wirePrice: 20,
    wireButtonDisabled: true,
    autoClippersPerSec: 0,
    // autoPaperclips: 0,
    autoClipperInitPrice: 5,
    autoClipperPrice: 6.1,
    megaClipperInitPrice: 500,
    megaClipperPrice: 1070,
    autoClippersButtonDisabled: true,
    megaClippersButtonDisabled: true,
    autoClipperOn: false,
    prevTrust: 3000,
    trust: 2,
    clipsToBuyTrust: 3000,
    delayAutoPaperClippers: 1000,
    ops: 0,
    opsMax: 10,//1000
    processorsNumber: 1,
    processorsMemory: 1,
    creativity: 0,
    cards: [],
    revTracker: false,
    makePaperclipDisabled: false,
    creativityTurnOn: false,
    listInvestments: ["Low Risk","Med Risk","High Risk"],
    chosenListDropdown: ["Low Risk","Pick a Start"],
    listStrategicModeling: ["Pick a Start","RANDOM"],
    noWire: false,
    showInvestmentEngine: true, //false
    showStrategicModeling: true, //false
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
    autoWireBuyerIsOn: true,
    megaClippersIsShown: false,
    autoClippersIsShown: false,
    delayUnsoldInventary: 4375,
    delayUnsoldInventaryConst: 500,
    fakeInvestmentsCash: 0,
    investmentsCash: 0,
    investmentsTotal: 0,
    investmentsStocks: 0,
    investmentsLines: ["","","","",""],
    risk: "lowRisk",
    delayUpdatingInvScreen: 10000,
    delayUpdatingInvLines: 5000,
    avgRevPerSec: 0,
    avgClipsSoldPerSec: 0,
    megaClippersToAdd: 500,
    megaClippersPerSec: 0,
    autoAndMegaClippersWorks: false,
    tournamentContinues: false,
    newTournamentCost: 10,
    newTournamentButtonDisabled: false,
    strategicModelingData: {moveA:"Move A", moveB:"Move B", cell1: "0,0", cell2: "0,0", cell3: "0,0", cell4: "0,0"},
    strategicModelingCurrentList: [{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1}],
    showStrategicModelingCurrentList: [{id: 1, strategy: "RANDOM", val: 0, chosen: false, round: 1}],
    strategicModelingRound: 1,
    roundsArray: [1],
    roundAndPlayersIsShown: false,
    playerLeftStrategyList: [],
    playerTopStrategyList: [],
    allRoundsRes: [],
    allRoundsResWithValues: [],
    listOfFinalResult: [],
    stratedicModelingLeftPartIsShown: false,
    stratedicModelingRightPartIsShown: true,
    strategicModelingPartsHover: false,
    cellIsDark: {cell1: false, cell2: false, cell3: false, cell4: false},
    yomi: 0,
    strategyWon: "",
    valueWon: 0,
    investmentsLevel: 0,
    upgradeInvestmentEngineCost: 100,
    creativityCounterIsThrown: false,
    lexicalProcessingIsThrown: false,
    combinatoryHarmonicsIsThrown: false,
    theHadwingerProblemIsThrown: false,
    theTothSausageConjectureIsThrown: false,
    donkeySpaceIsThrown: false,
    xavierReinitializationIsThrown: false
}

const makePaperclip = (state) => {
    let updateWire = +state.wire >= 1 ? +state.wire - 1 : 0   // 500 pomenat na 1
    // localStorage.setItem('paperClips', state.paperClips)
    return updateObject(state, {
       paperClips: state.paperClips + 100000, //pomenat na 1
       unsoldInventory: +state.unsoldInventory + 1,
       wire: +updateWire.toFixed(2)
    });
}

const updateClipsPerSec = (state, action) => {
    return updateObject(state, {
        clipsPerSec: action.val
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
        unsoldInventory: +state.unsoldInventory - 1,
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

const calcDelayUnsoldInventary = (state) => {
    let updatedDelayUnsoldInventary = (state.delayUnsoldInventaryConst *100)/state.publicDemand;

    return updateObject(state, {
        delayUnsoldInventary: +updatedDelayUnsoldInventary 
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
    let updatedDelayUnsoldInventaryConst = +(state.delayUnsoldInventaryConst - (state.delayUnsoldInventaryConst * 0.018)).toFixed(2);
    return updateObject(state, {
        marketingLevel: +state.marketingLevel + 1,
        marketingCost: +state.marketingCost * 2,
        funds: +updatedFunds,
        delayUnsoldInventaryConst: updatedDelayUnsoldInventaryConst
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

const toggleMegaClippersButton = (state) => {
    let isDisable
    if(state.megaClippersPerSec === 0){
        isDisable = state.funds < state.megaClipperInitPrice;
    }else{
        isDisable = state.funds < state.megaClipperPrice;
    }
    return updateObject(state, {
       megaClippersButtonDisabled: isDisable
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

const trustPlusOneFromProject = (state, action) => {
    return updateObject(state, {
        trust: state.trust + action.val
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

const removePriceOfProjectOpsCreatAndYomi = (state, action) => {
    return updateObject(state, {
        ops: state.ops - action.ops,
        creativity: state.creativity - action.creativity,
        yomi: state.yomi - action.yomi
    });
}

const removePriceOfProjectOpsAndYomi = (state, action) => {
    return updateObject(state, {
        ops: state.ops - action.ops,
        yomi: state.yomi - action.yomi
    });
}

const removePriceOfProjectYomiAndMoney = (state, action) => {
    return updateObject(state, {
        yomi: state.yomi - action.yomi,
        funds: state.funds - action.money
    });
}

const removePriceOfProjectMoney = (state, action) => {
    return updateObject(state, {
        funds: state.funds - action.money
    });
}

const removePriceOfProjectTrust = (state, action) => {
    return updateObject(state, {
        trust: state.trust - action.trust
    });
}

const improveAutoClippers = (state, action) => {
    let updatedAutoPaperClippers
    if(action.val !== 500){
        updatedAutoPaperClippers = state.delayAutoPaperClippers - (state.delayAutoPaperClippers * action.val / 100);
    }else{
        updatedAutoPaperClippers = state.delayAutoPaperClippers / action.val;
    }
   
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
    let updatedDelayUnsoldInventaryConst = +(state.delayUnsoldInventaryConst - (state.delayUnsoldInventaryConst * 0.03)).toFixed(2);
    return updateObject(state, {
        maxPublicDemand: +updatedMaxPublicDemand.toFixed(),
        delayUnsoldInventaryConst: updatedDelayUnsoldInventaryConst
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
        listStrategicModeling: updatedListStrategicModeling,
    });
}

const toggleDropdownInvestments = (state, action) => {
    return updateObject(state, {
        showDropdownInvestments: !state.showDropdownInvestments,
        showDropdownStrategicModeling: false,
    });
}

const toggleDropdownStrategicModeling = (state, action) => {
    return updateObject(state, {
        showDropdownStrategicModeling: !state.showDropdownStrategicModeling,
        showDropdownInvestments: false
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
    // console.log(state.chips)
    // console.log(chip)
    // console.log(updatedChips)
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
        chips: updatedChips
    });
}

const subtractQOps = (state, action) => {
    let updatedChips = [...state.chips];
    let chip = updatedChips.find(x => x.chipsNumber === action.chipsNumber);
    let chipsIndex = updatedChips.findIndex(x=> x.chipsNumber === action.chipsNumber);
    chip.qOps = chip.qOps - 1;
    updatedChips.splice(chipsIndex, 1, chip)

    return updateObject(state, {
        chips: updatedChips
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

const showMegaClippers = (state, action) => {
    return updateObject(state, {
        megaClippersIsShown: true
    });
}

const showAutoClippers = (state, action) => {
    return updateObject(state, {
        autoClippersIsShown: true
    });
}

const getDeposit = (state, action) => {
    let updatedCash;
    if(state.investmentsCash === 0){
        updatedCash = +state.funds.toFixed()
    }else{
        updatedCash = +state.investmentsCash + +state.funds.toFixed()
    }
    return updateObject(state, {
        funds: 0,
        investmentsCash: updatedCash,
        fakeInvestmentsCash: updatedCash
    });
}

const addInvestmentsLine = (state, action) => {
    let updatedInvestmentsLines = [...state.investmentsLines];
    if(state.investmentsLines.includes("") && action.notEmpty){
        if(state.investmentsLines[0] === ""){
            updatedInvestmentsLines.splice(0,1,action.obj);
        }
        if(state.investmentsLines[0] !== "" && 
            state.investmentsLines[1] === ""
        ){
            updatedInvestmentsLines.splice(1,1,action.obj);
        }
        if(state.investmentsLines[1] !== "" && 
            state.investmentsLines[2] === ""
        ){
            updatedInvestmentsLines.splice(2,1,action.obj);
        }
        if(state.investmentsLines[2] !== "" && 
            state.investmentsLines[3] === ""
        ){
            updatedInvestmentsLines.splice(3,1,action.obj);
        }
        if(state.investmentsLines[3] !== "" && 
            state.investmentsLines[4] === ""
        ){
            updatedInvestmentsLines.splice(4,1,action.obj);
        }
    }else{
        updatedInvestmentsLines.push(action.obj)
        updatedInvestmentsLines.splice(0,1);
    }
    return updateObject(state, {
        investmentsLines: updatedInvestmentsLines
    });
}

const updateInvestmentsLines = (state, action) => {
    return updateObject(state, {
        investmentsLines: action.array
    });
}

const updateInvestmentsTotal = (state, action) => {
    return updateObject(state, {
        investmentsTotal: action.total
    });
}

const updateInvestmentsCash = (state, action) => {
    return updateObject(state, {
        investmentsCash: action.cash
    });
}

const updateInvestmentsStocks = (state, action) => {
    return updateObject(state, {
        investmentsStocks: action.stocks
    });
}

const updateFakeInvestmentsCash = (state, action) => {
    return updateObject(state, {
        fakeInvestmentsCash: action.cash
    });
}

const updateFundsWithdraw = (state, action) => {
    let updatedFunds;
    if(state.funds === 0){
        updatedFunds = action.val;
    }else{
        updatedFunds = state.funds + action.val;
    }

    return updateObject(state, {
        funds: updatedFunds
    });
}

const addChosenFromDropdown = (state, action) => {
    let updatedChosenListDropdown = [...state.chosenListDropdown];
    updatedChosenListDropdown.splice(action.index, 1, action.chosen)
    return updateObject(state, {
        chosenListDropdown: updatedChosenListDropdown
    });
}

const updateInvestmentsDelay = (state, action) => {
    return updateObject(state, {
        delayUpdatingInvScreen: action.delayScreen,
        delayUpdatingInvLines: action.delayLines
    });
}

const updateAvgRevPerSec = (state, action) => {
    return updateObject(state, {
        avgRevPerSec: action.val
    });
}

const updateAvgClipsSoldPerSec = (state, action) => {
    return updateObject(state, {
        avgClipsSoldPerSec: action.val
    });
}

const megaClippersButtonPressed = (state, action) => {
    let updatedMegaClippersPrice;
    let updatedFunds;
    // let updatedMegaClippersToAdd;

    if(state.megaClippersPerSec === 0){
        updatedMegaClippersPrice = state.megaClipperPrice;
        updatedFunds = state.funds - state.megaClipperInitPrice;
        // updatedMegaClippersToAdd = state.megaClippersToAdd
    }else{
        updatedMegaClippersPrice = +(state.megaClipperPrice + (state.megaClipperPrice * 0.07)).toFixed(2);
        updatedFunds = +state.funds - +state.megaClipperPrice;
        // updatedMegaClippersToAdd = state.megaClippersToAdd + 500;
    }
    return updateObject(state, {
        megaClippersPerSec: +state.megaClippersPerSec + 1,
        megaClipperPrice: +updatedMegaClippersPrice,
        funds: +updatedFunds,
        // megaClippersToAdd: updatedMegaClippersToAdd
    });
}

const improveMegaClippers = (state, action) => {
    let updateMegaClippersToAdd = +(state.megaClippersToAdd + (state.megaClippersToAdd * action.val)/100).toFixed();
    return updateObject(state, {
        megaClippersToAdd: updateMegaClippersToAdd
    });
}

const switchOffOrOnAutoAndMegaClippers = (state, action) => {
    return updateObject(state, {
        autoAndMegaClippersWorks: action.val
    });
}

const tournamentState = (state, action) => {
    return updateObject(state, {
        tournamentContinues: action.val
    });
}

const updateNewTournamentCost = (state, action) => {
    return updateObject(state, {
        newTournamentCost: state.newTournamentCost + 10//+1000
    });
}

const toggleNewTournamentButton = (state) => {
    let opsCheck = state.ops < state.newTournamentCost;
    let tournamentCheck = state.tournamentContinues;
    let isDisable;

    if( opsCheck && !tournamentCheck || opsCheck && tournamentCheck || !opsCheck && tournamentCheck){
        isDisable = true
    }
  
    if( !opsCheck && !tournamentCheck ){
        isDisable = false
    }
    // console.log("GF", opsCheck, tournamentCheck)
    return updateObject(state, {
        newTournamentButtonDisabled: isDisable
    });
}

const updateStrategicModelingData = (state, action) => {
    return updateObject(state, {
        strategicModelingData: action.obj
    });
}

const updateStrategicModelingCurrentList = (state, action) => {
    let updatedStrategicModelingCurrentList = [...state.strategicModelingCurrentList];
    updatedStrategicModelingCurrentList.unshift(action.obj)
    return updateObject(state, {
        strategicModelingCurrentList: updatedStrategicModelingCurrentList
    });
}

const strategyChosen = (state, action) => {
    let updatedStrategicModelingCurrentList = [...state.strategicModelingCurrentList];
    let strategyType = updatedStrategicModelingCurrentList.find(str => str.strategy === action.strategy);
    let strategyTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === action.strategy);
    strategyType.chosen = action.val;
    updatedStrategicModelingCurrentList.splice(strategyTypeIndex, 1, strategyType);

    return updateObject(state, {
        strategicModelingCurrentList: updatedStrategicModelingCurrentList
    });
}

const clearChosenFromStrategicModelingDropdownList = (state, action) => {
    let updatedStrategicModelingCurrentList = [...state.strategicModelingCurrentList];
    updatedStrategicModelingCurrentList.map((el,i) => {
        updatedStrategicModelingCurrentList[i].chosen = false
    })

    console.log("RESalt",updatedStrategicModelingCurrentList)
    return updateObject(state, {
        strategicModelingCurrentList: updatedStrategicModelingCurrentList
    });
}

const updateStrategicModelingRound = (state, action) => {
    return updateObject(state, {
        strategicModelingRound: action.round
    });
}

// const updateNumberOfRounds = (state, action) => {
//     let updatedRoundsArray = Utility.getArrayOfRounds(action.val);
//     console.log(updatedRoundsArray)
//     return updateObject(state, {
//         roundsArray: updatedRoundsArray
//     });
// }

const showRoundAndPlayers = (state, action) => {
    return updateObject(state, {
        roundAndPlayersIsShown: action.val
    });
}

const updateRoundsOnScreen = (state, action) => {
    let updatedRoundsArray = [...state.roundsArray]
    if(updatedRoundsArray.length > 1){
        updatedRoundsArray.shift()
    }
    
    return updateObject(state, {
        roundsArray: updatedRoundsArray
    });
}

const updatePlayerLeftOnScreen = (state, action) => {
    let updatedPlayerLeftStrategyList = [...state.playerLeftStrategyList]
    if(updatedPlayerLeftStrategyList.length > 1){
        updatedPlayerLeftStrategyList.shift()
    }
    
    return updateObject(state, {
        playerLeftStrategyList: updatedPlayerLeftStrategyList
    });
}

const updatePlayerTopOnScreen = (state, action) => {
    let updatedPlayerTopStrategyList = [...state.playerTopStrategyList]
    if(updatedPlayerTopStrategyList.length > 1){
        let firstElement = updatedPlayerTopStrategyList[0]
        updatedPlayerTopStrategyList.shift();
        updatedPlayerTopStrategyList.push(firstElement);
    }
    
    return updateObject(state, {
        playerTopStrategyList: updatedPlayerTopStrategyList
    });
}

const setPlayersArrays = (state, action) => {
    let updatedListStrategicModeling = [...state.listStrategicModeling];
    let updatedRoundsArray = Utility.getArrayOfRounds(state.strategicModelingRound);
    updatedListStrategicModeling.shift();

    return updateObject(state, {
        playerLeftStrategyList: updatedListStrategicModeling,
        playerTopStrategyList: updatedListStrategicModeling,
        allRoundsRes: [],
        roundsArray: updatedRoundsArray,
        allRoundsResWithValues: [],
        listOfFinalResult: []
    });
}

const allRoundsResult = (state, action) => {
    let updatedAllRoundsRes = [...state.allRoundsRes];
    updatedAllRoundsRes.push(action.obj);
    // console.log(updatedAllRoundsRes)
    return updateObject(state, {
        allRoundsRes: updatedAllRoundsRes
    });
}

const updatedAllRoundsRes = (state, action) => {
    return updateObject(state, {
        allRoundsResWithValues: action.obj
    });
}

const updateListOfFinalResult = (state, action) => {
    return updateObject(state, {
        listOfFinalResult: action.obj
    });
}

const fillWithValuesStrategicModelingCurrentList = (state, action) => {
    let updatedStrategicModelingCurrentList = [...state.strategicModelingCurrentList];

    let strategyRANDOM = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'RANDOM');
    let strategyRANDOMTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'RANDOM');
    strategyRANDOM.val = state.listOfFinalResult.random;
    updatedStrategicModelingCurrentList.splice(strategyRANDOMTypeIndex, 1, strategyRANDOM);

    if(state.strategicModelingCurrentList.length > 1){
        let strategyA100 = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'A100');
        let strategyA100TypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'A100');
        strategyA100.val = state.listOfFinalResult.a100;
        updatedStrategicModelingCurrentList.splice(strategyA100TypeIndex, 1, strategyA100);
    }

    if(state.strategicModelingCurrentList.length > 2){
        let strategyB100 = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'B100');
        let strategyB100TypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'B100');
        strategyB100.val = state.listOfFinalResult.b100;
        updatedStrategicModelingCurrentList.splice(strategyB100TypeIndex, 1, strategyB100);
    }

    if(state.strategicModelingCurrentList.length > 3){
        let strategyGREEDY = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'GREEDY');
        let strategyGREEDYTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'GREEDY');
        strategyGREEDY.val = state.listOfFinalResult.greedy;
        updatedStrategicModelingCurrentList.splice(strategyGREEDYTypeIndex, 1, strategyGREEDY);
    }

    if(state.strategicModelingCurrentList.length > 4){
        let strategyGENEROUS = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'GENEROUS');
        let strategyGENEROUSTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'GENEROUS');
        strategyGENEROUS.val = state.listOfFinalResult.generouse;
        updatedStrategicModelingCurrentList.splice(strategyGENEROUSTypeIndex, 1, strategyGENEROUS);
    }

    if(state.strategicModelingCurrentList.length > 5){
        let strategyMINIMAX = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'MINIMAX');
        let strategyMINIMAXTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'MINIMAX');
        strategyMINIMAX.val = state.listOfFinalResult.miniMax;
        updatedStrategicModelingCurrentList.splice(strategyMINIMAXTypeIndex, 1, strategyMINIMAX);
    }

    if(state.strategicModelingCurrentList.length > 6){
        let strategyTITFORTAT = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'TIT FOR TAT');
        let strategyTITFORTATTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'TIT FOR TAT');
        strategyTITFORTAT.val = state.listOfFinalResult.titForTat;
        updatedStrategicModelingCurrentList.splice(strategyTITFORTATTypeIndex, 1, strategyTITFORTAT);
    }

    if(state.strategicModelingCurrentList.length > 7){
        let strategyBEATLAST = updatedStrategicModelingCurrentList.find(x=>x.strategy === 'BEAT LAST');
        let strategyBEATLASTTypeIndex = updatedStrategicModelingCurrentList.findIndex(str => str.strategy === 'BEAT LAST');
        strategyBEATLAST.val = state.listOfFinalResult.beatLast;
        updatedStrategicModelingCurrentList.splice(strategyBEATLASTTypeIndex, 1, strategyBEATLAST);
    }

    let getArrayOfValues = Utility.getAllValuesOfAStrategicModelingCurrentList(updatedStrategicModelingCurrentList);
    getArrayOfValues
    .sort((a,b)=>b-a)
    .map((el)=>{
        let filteredElement = updatedStrategicModelingCurrentList.filter(x=>x.val === el);
       
        if(filteredElement.length > 1){
            let arrayOfStrategies = []
            filteredElement.map((element)=>{
                arrayOfStrategies.push(element.strategy)
            });
            arrayOfStrategies.sort();
            arrayOfStrategies.map((str) => {
                let elementStrategy = updatedStrategicModelingCurrentList.find(x=>x.strategy === str);
                let indexOfStrategy = updatedStrategicModelingCurrentList.findIndex(x=>x.strategy === str);
                updatedStrategicModelingCurrentList.push(elementStrategy)
                updatedStrategicModelingCurrentList.splice(indexOfStrategy,1)
            })
        }else{
            let indexOfValue = updatedStrategicModelingCurrentList.findIndex(x=>x.val === el);
            updatedStrategicModelingCurrentList.push(filteredElement[0])
            updatedStrategicModelingCurrentList.splice(indexOfValue,1)
        }
    });

    console.log(getArrayOfValues);
    console.log(updatedStrategicModelingCurrentList)
    
    return updateObject(state, {
        strategicModelingCurrentList: updatedStrategicModelingCurrentList,
        showStrategicModelingCurrentList: updatedStrategicModelingCurrentList
    });
}

const toggleStrategicModelingLeftPart = (state, action) => {
    return updateObject(state, {
        stratedicModelingLeftPartIsShown: action.val
    });
}

const toggleStrategicModelingHover = (state, action) => {
    return updateObject(state, {
        strategicModelingPartsHover: action.val
    });
}

const toggleCells = (state, action) => {
    let updatedCellIsDark;
    if(action.obj.valLeft === 1 && action.obj.valTop === 1){
        updatedCellIsDark = {
            cell1: true, 
            cell2: false, 
            cell3: false, 
            cell4: false
        }
    }
    if(action.obj.valLeft === 2 && action.obj.valTop === 2){
        updatedCellIsDark = {
            cell1: false, 
            cell2: false, 
            cell3: false, 
            cell4: true
        }
    }
    if(action.obj.valLeft === 1 && action.obj.valTop === 2){
        updatedCellIsDark = {
            cell1: false, 
            cell2: false, 
            cell3: true, 
            cell4: false
        }
    }
    if(action.obj.valLeft === 2 && action.obj.valTop === 1){
        updatedCellIsDark = {
            cell1: false, 
            cell2: true, 
            cell3: false, 
            cell4: false
        }
    }
    if(action.obj.valLeft === 3 && action.obj.valTop === 3){
        updatedCellIsDark = {
            cell1: false, 
            cell2: false, 
            cell3: false, 
            cell4: false
        }
    }
    
    return updateObject(state, {
        cellIsDark: updatedCellIsDark
    });
}

const updateYomi = (state, action) => {
    let won = state.strategicModelingCurrentList.find(x => x.chosen === true);

    return updateObject(state, {
        yomi: state.yomi + won.val,
        strategyWon: won.strategy,
        valueWon: won.val
    });
}

const startNewTournament = (state, action) => {
    return updateObject(state, {
        ops: state.ops - state.newTournamentCost
    });
}

const reallocationOfTrust = (state, action) => {
    return updateObject(state, {
        processorsNumber: 0,
        processorsMemory: 0,
        ops: 0,
        opsMax: state.opsMax - state.opsMax
    });
}

const upgradeInvestmentEngine = (state, action) => {
    let updatedUpgradeInvestmentEngineCost = (state.upgradeInvestmentEngineCost + (state.upgradeInvestmentEngineCost * 0.17)) + 19 * (state.investmentsLevel + 3);
    return updateObject(state, {
        investmentsLevel: state.investmentsLevel + 1,
        yomi: state.yomi - state.upgradeInvestmentEngineCost,
        upgradeInvestmentEngineCost: +updatedUpgradeInvestmentEngineCost.toFixed()
      
    });
}

const stateFromLocalStorage = (state, action) => {
    console.log(action.state)
    return action.state;
}

const toggleThrownProjectStartCreativityCounter = (state, action) => {
    return updateObject(state, {
        creativityCounterIsThrown: action.val,     
    });
}

const toggleThrownProjectLexicalProcessing = (state, action) => {
    return updateObject(state, {
        lexicalProcessingIsThrown: action.val,     
    });
}

const toggleThrownProjectCombinatoryHarmonics = (state, action) => {
    return updateObject(state, {
        combinatoryHarmonicsIsThrown: action.val,     
    });
}

const toggleThrownProjectTheHadwingerProblem = (state, action) => {
    return updateObject(state, {
        theHadwingerProblemIsThrown: action.val,     
    });
}

const toggleThrownProjectTheTothSausageConjecture = (state, action) => {
    return updateObject(state, {
        theTothSausageConjectureIsThrown: action.val,     
    });
}

const toggleDonkeySpace = (state, action) => {
    return updateObject(state, {
        donkeySpaceIsThrown: action.val,     
    });
}

const toggleXavierReinitialization = (state, action) => {
    return updateObject(state, {
        xavierReinitializationIsThrown: action.val,     
    });
}

const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHECK_BUTTONS:
            return state;
        case actionTypes.MAKE_PAPERCLIP:
            return makePaperclip(state, action);
        case actionTypes.UPDATE_CLIPS_PER_SEC:
            return updateClipsPerSec(state, action);
        case actionTypes.START_SELLING:
            return state;
        case actionTypes.UPDATE_FUNDS:
            return updateFunds(state, action);
        case actionTypes.START_UPDATING_UNSOLD_INVENTORY:
            return state;
        case actionTypes.STOP_UPDATING_UNSOLD_INVENTORY:
            return state;
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
        case actionTypes.SET_AUTO_CLIPPER_INIT_PRICE:
            return setAutoClipperInitPrice(state, action); 
        case actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON:
            return toggleAutoClippersButton(state, action); 
        case actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON:
            return toggleMegaClippersButton(state, action); 
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
        case actionTypes.START_IMPROVING_MARKETING:
            return state;
        case actionTypes.IMPROVE_MARKETING:
            return improveMarketing(state, action);
        case actionTypes.SHOW_INVESTMENT_ENGINE:
            return showInvestEngine(state, action);
        case actionTypes.SHOW_STRATEGIC_MODELING:
            return showStrategicModeling(state, action);
        case actionTypes.REMOVE_PRICE_OF_PROJECT_TRUST:
            return removePriceOfProjectTrust(state, action);
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
        case actionTypes.ADD_MEGA_CLIPPERS:
            return state;
        case actionTypes.SHOW_MEGA_CLIPPERS:
            return showMegaClippers(state, action);
        case actionTypes.SHOW_AUTO_CLIPPERS:
            return showAutoClippers(state, action);
        case actionTypes.CALC_DELAY_UNSOLD_INVENTARY:
            return calcDelayUnsoldInventary(state, action);
        case actionTypes.START_INVESTMENTS_DEPOSIT:
            return state;
        case actionTypes.GET_DEPOSIT:
            return getDeposit(state, action);
        case actionTypes.START_UPDATING_SCREEN:
            return state;
        case actionTypes.ADD_INVESTMENTS_LINE:
            return addInvestmentsLine(state, action);
        case actionTypes.UPDATE_INVESTMENTS_LINES:
            return updateInvestmentsLines(state, action);
        case actionTypes.START_COUNTING_RISK:
            return state;
        case actionTypes.UPDATE_INVESTMENTS_TOTAL:
            return updateInvestmentsTotal(state, action);
        case actionTypes.UPDATE_INVESTMENTS_CASH:
            return updateInvestmentsCash(state, action);
        case actionTypes.UPDATE_INVESTMENTS_STOCKS:
            return updateInvestmentsStocks(state, action);
        case actionTypes.START_APPLYING_PROFIT_LOSS:
            return state;
        case actionTypes.UPDATE_FAKE_INVESTMENTS_CASH:
            return updateFakeInvestmentsCash(state, action);
        case actionTypes.START_INVESTMENTS_WITHDRAW:
            return state;
        case actionTypes.UPDATE_FUNDS_WITHDRAW:
            return updateFundsWithdraw(state, action);
        case actionTypes.STOP_UPDATING_SCREEN:
            return state;
        case actionTypes.CHOOSE_FROM_DROPDOWN:
            return state;
        case actionTypes.ADD_CHOSEN_FROM_DROPDOWN:
            return addChosenFromDropdown(state, action);
        case actionTypes.UPDATE_INVESTMENTS_DELAY:
            return updateInvestmentsDelay(state, action);
        case actionTypes.STOP_UPDATING_INVESTMENTS_LINE:
            return state;
        case actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE:
            return state;
        case actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE:
            return state;
        case actionTypes.UPDATE_AVG_REV_PER_SEC:
            return updateAvgRevPerSec(state, action);   
        case actionTypes.UPDATE_AVG_CLIPS_SOLD_PER_SEC:
            return updateAvgClipsSoldPerSec(state, action);
        case actionTypes.MEGA_CLIPPERS_BUTTON_PRESSED:
            return megaClippersButtonPressed(state, action);  
        case actionTypes.START_MEGACLIPPERS:
            return state;     
        case actionTypes.IMPROVE_MEGA_CLIPPERS:
            return improveMegaClippers(state, action);  
        case actionTypes.SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS:
            return switchOffOrOnAutoAndMegaClippers(state, action); 

            
        case actionTypes.START_NEW_TOURNAMENT:
            return startNewTournament(state, action); 
        case actionTypes.TOURNAMENT_STATE:
            return tournamentState(state, action); 
        case actionTypes.UPDATE_NEW_TOURNAMENT_COST:
            return updateNewTournamentCost(state, action); 
        case actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON:
            return toggleNewTournamentButton(state, action); 
        case actionTypes.START_RUNNING_STRATEGIC_MODELING :
            return state;             
        case actionTypes.UPDATE_STRATEGIC_MODELING_DATA:
            return updateStrategicModelingData(state, action);  
        case actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST:
            return updateStrategicModelingCurrentList(state, action);  
        case actionTypes.STRATEGY_CHOSEN:
            return strategyChosen(state, action);   
        case actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST:
            return clearChosenFromStrategicModelingDropdownList(state, action);      
        case actionTypes.UPDATE_STRATEGIC_MODELING_ROUND:
            return updateStrategicModelingRound(state, action);      
        case actionTypes.TOURNAMENT_STARTED:
            return state;     
        case actionTypes.STOP_TOURNAMENT:
            return state;    
        case actionTypes.TOURNAMENT_DURATION:
            return state; 
        // case actionTypes.UPDATE_NUMBER_OF_ROUND:
        //     return updateNumberOfRounds(state, action);      
        case actionTypes.SHOW_ROUND_AND_PLAYERS:
            return showRoundAndPlayers(state, action);  
        case actionTypes.START_UPDATING_ROUNDS_ON_SCREEN:
            return state; 
        case actionTypes.UPDATE_ROUNDS_ON_SCREEN:
            return updateRoundsOnScreen(state, action);  
        case actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN:
            return state;    
        case actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN:
            return updatePlayerLeftOnScreen(state, action);  
        case actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN:
            return state;    
        case actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN:
            return updatePlayerTopOnScreen(state, action);
        case actionTypes.SET_PLAYERS_ARRAY:
            return setPlayersArrays(state, action);
        case actionTypes.GAME_STARTED:
            return state;     
        case actionTypes.ALL_ROUNDS_RESULT:
            return allRoundsResult(state, action);
        case actionTypes.STRATEGIC_MODELING_RESULT:
            return state;  
        case actionTypes.START_COUNTING_RESULT:
            return state;  
        case actionTypes.UPDATED_ALL_ROUNDS_RES:
            return updatedAllRoundsRes(state, action);
        case actionTypes.COUNT_FINAL_RESULT_OF_EACH_STRATEGY:
            return state; 
        case actionTypes.UPDATE_LIST_OF_FINAL_RESULT:
            return updateListOfFinalResult(state, action);  
        case actionTypes.FILL_WITH_VALUES_STRATEGIC_MODELING_CURRENT_LIST:
            return fillWithValuesStrategicModelingCurrentList(state, action);  
        case actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART:
            return toggleStrategicModelingLeftPart(state, action);   
        case actionTypes.TOGGLE_STRATEGIC_MODELING_HOVER:
            return toggleStrategicModelingHover(state, action);   
        case actionTypes.TOGGLE_CELLS:
            return toggleCells(state, action);   
        case actionTypes.UPDATE_YOMI:
            return updateYomi(state, action);   
        case actionTypes.ADD_COHERENT_EXTRAPOLATED_VOLITION:
            return state; 
        case actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_CREAT_AND_YOMI:
            return removePriceOfProjectOpsCreatAndYomi(state, action);   
        case actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_YOMI:
            return removePriceOfProjectOpsAndYomi(state, action);   
        case actionTypes.REMOVE_PRICE_OF_PROJECT_YOMI_AND_MONEY:
            return removePriceOfProjectYomiAndMoney(state, action);   
        case actionTypes.REMOVE_PRICE_OF_PROJECT_MONEY:
            return removePriceOfProjectMoney(state, action);   
        case actionTypes.ADD_XAVIER_REINITIALIZATION:
            return state;  
        case actionTypes.REALLOCATION_OF_TRUST:
            return reallocationOfTrust(state, action);  
        case actionTypes.ADD_HOSTILE_TAKEOVER:
            return state; 
        case actionTypes.UPGRADE_INVESTMENT_ENGINE:
            return upgradeInvestmentEngine(state, action);  
        case actionTypes.STATE_FROM_LOCAL_STORAGE:
            return stateFromLocalStorage(state, action);   
        case actionTypes.TOGGLE_THROWN_PROJECT_START_CREATIVITY_COUNTER:
            return toggleThrownProjectStartCreativityCounter(state, action); 
        case actionTypes.TOGGLE_THROWN_PROJECT_LEXICAL_PROCESSING:
            return toggleThrownProjectLexicalProcessing(state, action);     
        case actionTypes.TOGGLE_THROWN_PROJECT_COMBINATORY_HARMONICS:
            return toggleThrownProjectCombinatoryHarmonics(state, action);     
        case actionTypes.TOGGLE_THROWN_PROJECT_THE_HADWINGER_PROBLEM:
            return toggleThrownProjectTheHadwingerProblem(state, action); 
        case actionTypes.TOGGLE_THROWN_PROJECT_THE_TOTH_SAUSAGE_CONJECTURE:
            return toggleThrownProjectTheTothSausageConjecture(state, action);       
        case actionTypes.TOGGLE_THROWN_PROJECT_DONKEY_SPACE:
            return toggleDonkeySpace(state, action);      
        case actionTypes.TOGGLE_THROWN_PROJECT_XAVIER_REINITIALIZATION:
            return toggleXavierReinitialization(state, action);  
            
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
