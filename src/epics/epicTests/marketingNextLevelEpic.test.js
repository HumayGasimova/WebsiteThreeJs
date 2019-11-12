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

describe('marketingNextLevelEpic', () => {
  it('should return MARKETING_NEXT_LEVEL, TOGGLE_MARKETING_BUTTON, UPDATE_MAX_PUBLIC_DEMAND, UPDATE_PUBLIC_DEMAND, CALC_DELAY_UNSOLD_INVENTARY, STOP_UPDATING_UNSOLD_INVENTORY, START_UPDATING_UNSOLD_INVENTORY',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.MARKETING
      });
      const epic$ = Epic.marketingNextLevelEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.MARKETING_NEXT_LEVEL },
        { type: actionTypes.TOGGLE_MARKETING_BUTTON },
        { type: actionTypes.UPDATE_MAX_PUBLIC_DEMAND },
        { type: actionTypes.UPDATE_PUBLIC_DEMAND },
        { type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY },
        { type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY },
        { type: actionTypes.START_UPDATING_UNSOLD_INVENTORY }
      ])
    }
  )
});
