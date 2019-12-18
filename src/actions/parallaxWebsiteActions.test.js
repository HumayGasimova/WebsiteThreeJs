/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '.';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('parallaxWebsiteActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (toggleMenuButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_MENU_BUTTON
            }
        ];

        store.dispatch(Actions.toggleMenuButton());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (menuButtonIsToggled)', () => {
        const expectedActions = [
            {
                type: actionTypes.MENU_BUTTON_IS_TOGGLED,
                val: true
            }
        ];

        store.dispatch(Actions.menuButtonIsToggled(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (initServices)', () => {
        const expectedActions = [
            {
                type: actionTypes.INIT_SERVICES,
                array: [{a: 1, b: 2},{a: 1, b: 2}]
            }
        ];

        store.dispatch(Actions.initServices([{a: 1, b: 2},{a: 1, b: 2}]));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

   
});
