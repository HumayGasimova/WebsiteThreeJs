/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '../actions';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('businessActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (checkButtons)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHECK_BUTTONS
            }
        ];

        store.dispatch(Actions.checkButtons());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});
