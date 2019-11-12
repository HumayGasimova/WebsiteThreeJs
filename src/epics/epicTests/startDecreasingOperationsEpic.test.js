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

describe('startDecreasingOperationsEpic', () => {
  it('should return START_DECREASING_OPS',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_DECREASING_OPERATIONS
      });
      const epic$ = Epic.startDecreasingOperationsEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.START_DECREASING_OPS }
      ])
    }
  )
});
