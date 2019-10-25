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
  });