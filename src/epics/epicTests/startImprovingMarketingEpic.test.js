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

describe('startImprovingMarketingEpic', () => {
  it('should return IMPROVE_MARKETING, CALC_DELAY_UNSOLD_INVENTARY, STOP_UPDATING_UNSOLD_INVENTORY, START_UPDATING_UNSOLD_INVENTORY',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_IMPROVING_MARKETING,
        act: 50
      });
      const epic$ = Epic.startImprovingMarketingEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.IMPROVE_MARKETING,
            val: 50
        },
        { type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY },
        { type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY },
        { type: actionTypes.START_UPDATING_UNSOLD_INVENTORY }
      ])
    }
  )
});
