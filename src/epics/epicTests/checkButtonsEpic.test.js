/**
* Libraries
*/

import { 
  ActionsObservable 
} from 'redux-observable';

/**
* Epic
*/

import * as Epic from '../index';

/**
* Constants
*/

import * as actionTypes from "../../constants/actionTypes";

/**
* Tests
*/

describe('checkButtonsEpic', () => {

  it('should return TOGGLE_WIRE_BUTTON, TOGGLE_MARKETING_BUTTON, TOGGLE_AUTO_CLIPPERS_BUTTON, TOGGLE_MEGA_CLIPPERS_BUTTON, TOGGLE_NEW_TOURNAMENT_BUTTON',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.CHECK_BUTTONS
      });
      const epic$ = Epic.checkButtonsEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.TOGGLE_WIRE_BUTTON },
        { type: actionTypes.TOGGLE_MARKETING_BUTTON },
        { type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON },
        { type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON },
        { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON }
      ])
    }
  )
});
