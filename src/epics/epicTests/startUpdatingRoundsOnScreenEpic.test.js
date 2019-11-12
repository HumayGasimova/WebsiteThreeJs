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

import { 
  take 
} from 'rxjs/operators';

/**
* Tests
*/

describe('startUpdatingRoundsOnScreenEpic', () => {
  it('should return a UPDATE_ROUNDS_ON_SCREEN after each second',
    () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const action$ = ActionsObservable.of({
        type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN
      });

      scheduler.run(helpers => {
        const {expectObservable} = helpers;
        const expectedMarble = '1s a 999ms b 999ms (c|)';
        const expectedValues = {
          a: { type: actionTypes.UPDATE_ROUNDS_ON_SCREEN }, 
          b: { type: actionTypes.UPDATE_ROUNDS_ON_SCREEN }, 
          c: { type: actionTypes.UPDATE_ROUNDS_ON_SCREEN }
        };
        expectObservable(Epic.startUpdatingRoundsOnScreenEpic(action$).pipe(take(3))).toBe(expectedMarble, expectedValues)
      })
    })
});
