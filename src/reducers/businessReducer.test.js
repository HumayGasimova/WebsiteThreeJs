import reducer from './businessReducer';
import * as actionTypes from "../constants/actionTypes";

describe('businessReducer', () => {

    it("should return the initial state", () => {
       expect(reducer(undefined, {})).toEqual({
        paperClips: 0,
        clipsPerSec: 0,
        funds: 100, //pomenat na 0
        paperclipPrice: 1000000000, // 0.5
        unsoldInventory: 0,
        maxPublicDemand: 800,
        publicDemand: 16,
        marketingLevel: 1,
        marketingCost: 100,
        marketingButtonDisabled: true,
        delay: 1000,
        wire: 50, //1000
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
        autoWireBuyerIsOn: true,
        megaClippersIsShown: false,
        delayUnsoldInventary: 4375,
        delayUnsoldInventaryConst: 700,
        fakeInvestmentsCash: 0,
        investmentsCash: 0,
        investmentsTotal: 0,
        investmentsStocks: 0,
        investmentsLines: ["","","","",""],
        risk: "lowRisk"
    });
    })
});
