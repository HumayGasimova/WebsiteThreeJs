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

describe('startAddingQOpsEpic', () => {
  it('should return a ADD_Q_OPS after each 84 ms',
    () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const action$ = ActionsObservable.of({
          type: actionTypes.START_ADDING_Q_OPS,
          chipsNumber: 'chipX'
      });

      scheduler.run(helpers => {
        const {expectObservable} = helpers;
        const expectedMarble = '84ms a 83ms (b|)';
        const expectedValues = {
          a: { 
              type: actionTypes.ADD_Q_OPS,
              chipsNumber: 'chipX'
          }, 
          b: { 
              type: actionTypes.ADD_Q_OPS,
              chipsNumber: 'chipX'
          }
        };
        expectObservable(Epic.startAddingQOpsEpic(action$).pipe(take(2))).toBe(expectedMarble, expectedValues);
      })
      }
    )
});
