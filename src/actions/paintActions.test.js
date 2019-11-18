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

describe('paintActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (mouseDown)', () => {
        const expectedActions = [
            {
                type: actionTypes.MOUSE_DOWN,
                val: true
            }
        ];

        store.dispatch(Actions.mouseDown(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (getColor)', () => {
        const expectedActions = [
            {
                type: actionTypes.GET_COLOR,
                color: "green"
            }
        ];

        store.dispatch(Actions.getColor("green"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});
