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

import * as Epic from '../index'

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

describe('startUpdatingPlayerLeftOnScreenEpic', () => {

  it('should return a UPDATE_PLAYER_LEFT_ON_SCREEN after each 4001ms',
    () => {
        const scheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const action$ = ActionsObservable.of({
          type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN
        });

        const state$ = {
          value: {
            business: {
              strategicModelingRound: 16
            }
          }
        }
        scheduler.run(helpers => {
          const {expectObservable} = helpers;
          const expectedMarble = '4001ms a 4s b 4s (c|)';
          const expectedValues = {
            a: { type: actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN }, 
            b: { type: actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN }, 
            c: { type: actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN }
          };
          expectObservable(Epic.startUpdatingPlayerLeftOnScreenEpic(action$, state$).pipe(take(3))).toBe(expectedMarble, expectedValues)
        })
    })

});
