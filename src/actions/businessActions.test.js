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
  });