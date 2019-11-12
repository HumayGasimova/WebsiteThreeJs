/**
* Libraries
*/

import { 
  ActionsObservable 
} from 'redux-observable';

import { 
  TestScheduler 
} from 'rxjs/testing';

/**
* Epic
*/

import * as Epic from '../index';

/**
* Constants
*/

import * as actionTypes from "../../constants/actionTypes";

/**
* Operators
*/

import { take } from 'rxjs/operators';

/**
* Tests
*/

describe('startSubtractingQOpsEpic', () => {
  it('should return a SUBTRACT_Q_OPS after each 84 ms',
    () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const action$ = ActionsObservable.of({
          type: actionTypes.START_SUBTRACTING_Q_OPS,
          chipsNumber: 'chipX'
      });

      scheduler.run(helpers => {
        const {expectObservable} = helpers;
        const expectedMarble = '84ms a 83ms b 83ms (c|)';
        const expectedValues = {
          a: { 
              type: actionTypes.SUBTRACT_Q_OPS,
              chipsNumber: 'chipX'
          }, 
          b: { 
              type: actionTypes.SUBTRACT_Q_OPS,
              chipsNumber: 'chipX'
          },
          c: { 
              type: actionTypes.SUBTRACT_Q_OPS,
              chipsNumber: 'chipX'
          }
        };
        expectObservable(Epic.startSubtractingQOpsEpic(action$).pipe(take(3))).toBe(expectedMarble, expectedValues)
      })
      }
    )
});
