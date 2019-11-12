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

describe('raisePriceEpic', () => {
  it('should return UPDATE_PUBLIC_DEMAND, CALC_DELAY_UNSOLD_INVENTARY, STOP_UPDATING_UNSOLD_INVENTORY, START_UPDATING_UNSOLD_INVENTORY',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.RAISE_PRICE
      });
      const epic$ = Epic.raisePriceEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.UPDATE_PUBLIC_DEMAND },
        { type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY },
        { type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY },
        { type: actionTypes.START_UPDATING_UNSOLD_INVENTORY },
      ])
    }
  )

  it('should return UPDATE_PUBLIC_DEMAND, CALC_DELAY_UNSOLD_INVENTARY, STOP_UPDATING_UNSOLD_INVENTORY, START_UPDATING_UNSOLD_INVENTORY',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.LOWER_PRICE
      });
      const epic$ = Epic.raisePriceEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.UPDATE_PUBLIC_DEMAND },
        { type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY },
        { type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY },
        { type: actionTypes.START_UPDATING_UNSOLD_INVENTORY },
      ])
    }
  )
});
