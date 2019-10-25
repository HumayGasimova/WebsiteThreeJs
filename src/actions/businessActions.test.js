import configureStore from 'redux-mock-store';
import * as Actions from '../actions';
import * as actionTypes from "../constants/actionTypes";
import { iterator } from 'rxjs/internal-compatibility';

const mockStore = configureStore();
const store = mockStore();

describe('businessActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });
  
    it('Dispatches the correct action and payload (makePaperclip)', () => {
        const expectedActions = [
            {
                type: actionTypes.MAKE_PAPERCLIP
            }
        ];

        store.dispatch(Actions.makePaperclip());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (updateFunds)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_FUNDS,
                value: 5
            }
        ];

        store.dispatch(Actions.updateFunds(5));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (checkButtons)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHECK_BUTTONS
            }
        ];

        store.dispatch(Actions.checkButtons());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (sellPaperclips)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_SELLING
            }
        ];

        store.dispatch(Actions.sellPaperclips());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startUpdatingUnsoldInventory)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_UPDATING_UNSOLD_INVENTORY
            }
        ];

        store.dispatch(Actions.startUpdatingUnsoldInventory());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (stopUpdatingUnsoldInventory)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY
            }
        ];

        store.dispatch(Actions.stopUpdatingUnsoldInventory());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (updateUnsoldInventory)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_UNSOLD_INVENTORY
            }
        ];

        store.dispatch(Actions.updateUnsoldInventory());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (lowerPrice)', () => {
        const expectedActions = [
            {
                type: actionTypes.LOWER_PRICE
            }
        ];

        store.dispatch(Actions.lowerPrice());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (raisePrice)', () => {
        const expectedActions = [
            {
                type: actionTypes.RAISE_PRICE
            }
        ];

        store.dispatch(Actions.raisePrice());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (updatePublicDemand)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_PUBLIC_DEMAND
            }
        ];

        store.dispatch(Actions.updatePublicDemand());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleMarketingButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_MARKETING_BUTTON
            }
        ];

        store.dispatch(Actions.toggleMarketingButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })
    
    it('Dispatches the correct action and payload (marketing)', () => {
        const expectedActions = [
            {
                type: actionTypes.MARKETING
            }
        ];

        store.dispatch(Actions.marketing());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (marketingNextLevel)', () => {
        const expectedActions = [
            {
                type: actionTypes.MARKETING_NEXT_LEVEL
            }
        ];

        store.dispatch(Actions.marketingNextLevel());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (updateMaxPublicDemand)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_MAX_PUBLIC_DEMAND
            }
        ];

        store.dispatch(Actions.updateMaxPublicDemand());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startBuyingWire)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_BUYING_WIRE
            }
        ];

        store.dispatch(Actions.startBuyingWire());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (buyWire)', () => {
        const expectedActions = [
            {
                type: actionTypes.BUY_WIRE
            }
        ];

        store.dispatch(Actions.buyWire());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (randomWirePrice)', () => {
        const expectedActions = [
            {
                type: actionTypes.RANDOM_WIRE_PRICE,
                value: 15
            }
        ];

        store.dispatch(Actions.randomWirePrice(15));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleWireButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_WIRE_BUTTON
            }
        ];

        store.dispatch(Actions.toggleWireButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (checkExistenceOfWire)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHECK_EXISTENCE_OF_WIRE
            }
        ];

        store.dispatch(Actions.checkExistenceOfWire());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (stop)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP
            }
        ];

        store.dispatch(Actions.stop());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (wireExists)', () => {
        const expectedActions = [
            {
                type: actionTypes.WIRE_EXISTS,
                val: true
            }
        ];

        store.dispatch(Actions.wireExists(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (autoPaperclips)', () => {
        const expectedActions = [
            {
                type: actionTypes.AUTO_PAPERCLIPS
            }
        ];

        store.dispatch(Actions.autoPaperclips());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (autoPaperclipsStart)', () => {
        const expectedActions = [
            {
                type: actionTypes.AUTO_PAPERCLIPS_START
            }
        ];

        store.dispatch(Actions.autoPaperclipsStart());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (autoClippersAddOne)', () => {
        const expectedActions = [
            {
                type: actionTypes.AUTO_CLIPPERS_ADD_ONE
            }
        ];

        store.dispatch(Actions.autoClippersAddOne());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (setAutoClipperInitPrice)', () => {
        const expectedActions = [
            {
                type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE
            }
        ];

        store.dispatch(Actions.setAutoClipperInitPrice());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleAutoClippersButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
            }
        ];

        store.dispatch(Actions.toggleAutoClippersButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleMegaClippersButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON
            }
        ];

        store.dispatch(Actions.toggleMegaClippersButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (trustPlusOne)', () => {
        const expectedActions = [
            {
                type: actionTypes.TRUST_PLUS_ONE
            }
        ];

        store.dispatch(Actions.trustPlusOne());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (trustPlusOneFromProject)', () => {
        const expectedActions = [
            {
                type: actionTypes.TRUST_PLUS_ONE_FROM_PROJECT
            }
        ];

        store.dispatch(Actions.trustPlusOneFromProject());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (increaseOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.INCREASE_OPS
            }
        ];

        store.dispatch(Actions.increaseOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startDecreasingOperations)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_DECREASING_OPERATIONS
            }
        ];

        store.dispatch(Actions.startDecreasingOperations());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startDecreasingOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_DECREASING_OPS
            }
        ];

        store.dispatch(Actions.startDecreasingOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (stopDecreasingOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP_DECREASING_OPERATIONS
            }
        ];

        store.dispatch(Actions.stopDecreasingOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (decreaseOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.DECREASE_OPS
            }
        ];

        store.dispatch(Actions.decreaseOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (increaseProcessors)', () => {
        const expectedActions = [
            {
                type: actionTypes.INCREASE_PROCESSORS
            }
        ];

        store.dispatch(Actions.increaseProcessors());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (increaseProcessorsMemory)', () => {
        const expectedActions = [
            {
                type: actionTypes.INCREASE_PROCESSORS_MEMORY
            }
        ];

        store.dispatch(Actions.increaseProcessorsMemory());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (increaseCreativity)', () => {
        const expectedActions = [
            {
                type: actionTypes.INCREASE_CREATIVITY
            }
        ];

        store.dispatch(Actions.increaseCreativity());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (initProjects)', () => {
        const expectedActions = [
            {
                type: actionTypes.INIT_PROJECTS,
                card1: {a:1},
                card2: {a:2},
                card3: {a:3}
            }
        ];

        store.dispatch(Actions.initProjects({a:1},{a:2},{a:3}));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (checkCardValidity)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHECK_CARD_VALIDITY,
                cardId: "card1",
                valid: true,
                i: 0
            }
        ];

        store.dispatch(Actions.checkCardValidity("card1",true,0));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (deleteCard)', () => {
        const expectedActions = [
            {
                type: actionTypes.DELETE_CARD,
                cardId: "card3"
            }
        ];

        store.dispatch(Actions.deleteCard("card3"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showRevTracker)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_REV_TRACKER,
                price: 45
            }
        ];

        store.dispatch(Actions.showRevTracker(45));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addProject)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_PROJECT,
                project: {b: 7}
            }
        ];

        store.dispatch(Actions.addProject({b: 7}));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (removePriceOfProjectOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS,
                ops: 47
            }
        ];

        store.dispatch(Actions.removePriceOfProjectOps(47));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (removePriceOfProjectCreat)', () => {
        const expectedActions = [
            {
                type: actionTypes.REMOVE_PRICE_OF_PROJECT_CREAT,
                creativity: 73
            }
        ];

        store.dispatch(Actions.removePriceOfProjectCreat(73));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (removePriceOfProjectOpsAndCreat)', () => {
        const expectedActions = [
            {
                type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_CREAT,
                ops: 74,
                creativity: 25
            }
        ];

        store.dispatch(Actions.removePriceOfProjectOpsAndCreat(74, 25));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (removePriceOfProjectTrust)', () => {
        const expectedActions = [
            {
                type: actionTypes.REMOVE_PRICE_OF_PROJECT_TRUST,
                trust: 67
            }
        ];

        store.dispatch(Actions.removePriceOfProjectTrust(67));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (improveAutoClippers)', () => {
        const expectedActions = [
            {
                type: actionTypes.IMPROVE_AUTO_PAPER_CLIPPER,
                val: 17
            }
        ];

        store.dispatch(Actions.improveAutoClippers(17));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleMakePaperclipButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
                val: true
            }
        ];

        store.dispatch(Actions.toggleMakePaperclipButton(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (improveWireExtrusion)', () => {
        const expectedActions = [
            {
                type: actionTypes.IMPROVE_WIRE_EXTRUSION,
                val: 36
            }
        ];

        store.dispatch(Actions.improveWireExtrusion(36));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startCreativityCounter)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_CREATIVITY_COUNTER
            }
        ];

        store.dispatch(Actions.startCreativityCounter());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (creativityTurnOn)', () => {
        const expectedActions = [
            {
                type: actionTypes.CREATIVITY_TURN_ON
            }
        ];

        store.dispatch(Actions.creativityTurnOn());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addLexicalProcessing)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_LEXICAL_PROCESSING
            }
        ];

        store.dispatch(Actions.addLexicalProcessing());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addCombinatoryHarmonics)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_COMBINATORY_HARMONICS
            }
        ];

        store.dispatch(Actions.addCombinatoryHarmonics());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addTheHadwingerProblem)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_THE_HADWINGER_PROBLEM
            }
        ];

        store.dispatch(Actions.addTheHadwingerProblem());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addTheTothSausageConjecture)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_THE_TOTH_SAUSAGE_CONJECTURE
            }
        ];

        store.dispatch(Actions.addTheTothSausageConjecture());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addDonkeySpace)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_DONKEY_SPACE
            }
        ];

        store.dispatch(Actions.addDonkeySpace());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startImprovingMarketing)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_IMPROVING_MARKETING,
                act: {a:5}
            }
        ];

        store.dispatch(Actions.startImprovingMarketing({a:5}));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })
    
    it('Dispatches the correct action and payload (improveMarketing)', () => {
        const expectedActions = [
            {
                type: actionTypes.IMPROVE_MARKETING,
                val: 46
            }
        ];

        store.dispatch(Actions.improveMarketing(46));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showInvestEngine)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_INVESTMENT_ENGINE
            }
        ];

        store.dispatch(Actions.showInvestEngine(46));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showStrategicModeling)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_STRATEGIC_MODELING
            }
        ];

        store.dispatch(Actions.showStrategicModeling(46));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (sendCommentToTerminal)', () => {
        const expectedActions = [
            {
                type: actionTypes.SEND_COMMENT_TO_TERMINAL,
                comment: "Testing actions"
            }
        ];

        store.dispatch(Actions.sendCommentToTerminal("Testing actions"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addNewStrategy)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_NEW_STRATEGY,
                strategy: "New Strategy"
            }
        ];

        store.dispatch(Actions.addNewStrategy("New Strategy"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleDropdownInvestments)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_DROPDOWN_INVESTMENTS
            }
        ];

        store.dispatch(Actions.toggleDropdownInvestments());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleDropdownStrategicModeling)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_DROPDOWN_STRATEGIC_MODELING
            }
        ];

        store.dispatch(Actions.toggleDropdownStrategicModeling());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (closeDropdowns)', () => {
        const expectedActions = [
            {
                type: actionTypes.CLOSE_DROPDOWNS
            }
        ];

        store.dispatch(Actions.closeDropdowns());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showQuantumComputing)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_QUANTUM_COMPUTING
            }
        ];

        store.dispatch(Actions.showQuantumComputing());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showQuantCompMessage)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_QUANT_COMP_MESSAGE
            }
        ];

        store.dispatch(Actions.showQuantCompMessage());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addChip)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_CHIP,
                obj: {c: 8}
            }
        ];

        store.dispatch(Actions.addChip({c: 8}));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleChip)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: "chipX"
            }
        ];

        store.dispatch(Actions.toggleChip(true, "chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (changeToQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHANGE_TO_Q_OPS
            }
        ];

        store.dispatch(Actions.changeToQOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startAddingQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_ADDING_Q_OPS,
                chipsNumber: "chipX"
            }
        ];

        store.dispatch(Actions.startAddingQOps("chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_Q_OPS,
                chipsNumber: "chipX"
            }
        ];

        store.dispatch(Actions.addQOps("chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (stopAddingQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP_ADDING_Q_OPS
            }
        ];

        store.dispatch(Actions.stopAddingQOps());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startSubtractingQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_SUBTRACTING_Q_OPS,
                chipsNumber: "chipX"
            }
        ];

        store.dispatch(Actions.startSubtractingQOps("chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (subtractQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.SUBTRACT_Q_OPS,
                chipsNumber: "chipX"
            }
        ];

        store.dispatch(Actions.subtractQOps("chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (stopSubtractingQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.STOP_SUBTRACTING_Q_OPS
            }
        ];

        store.dispatch(Actions.stopSubtractingQOps("chipX"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (captureCurrentQOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.CAPTURE_CURRENT_Q_OPS,
                val: 276
            }
        ];

        store.dispatch(Actions.captureCurrentQOps(276));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (updateOps)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_OPS,
                val: 34
            }
        ];

        store.dispatch(Actions.updateOps(34));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (startTimer)', () => {
        const expectedActions = [
            {
                type: actionTypes.START_TIMER
            }
        ];

        store.dispatch(Actions.startTimer());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (clickWireButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            }
        ];

        store.dispatch(Actions.clickWireButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showAutoWireBuyer)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_AUTO_WIRE_BUYER
            }
        ];

        store.dispatch(Actions.showAutoWireBuyer());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (toggleWireBuyerProject)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
            }
        ];

        store.dispatch(Actions.toggleWireBuyerProject());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (autoWireBuyer)', () => {
        const expectedActions = [
            {
                type: actionTypes.AUTO_WIRE_BUYER
            }
        ];

        store.dispatch(Actions.autoWireBuyer());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })
    
    it('Dispatches the correct action and payload (toggleAutoWireBuyer)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_AUTO_WIRE_BUYER
            }
        ];

        store.dispatch(Actions.toggleAutoWireBuyer());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (addMegaClippers)', () => {
        const expectedActions = [
            {
                type: actionTypes.ADD_MEGA_CLIPPERS
            }
        ];

        store.dispatch(Actions.addMegaClippers());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })

    it('Dispatches the correct action and payload (showMegaClippers)', () => {
        const expectedActions = [
            {
                type: actionTypes.SHOW_MEGA_CLIPPERS
            }
        ];

        store.dispatch(Actions.showMegaClippers());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    })
  });