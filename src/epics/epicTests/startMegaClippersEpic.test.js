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
* Tests
*/

describe('startMegaClippersEpic', () => {
  it('should (if wire is more than megaClippersToAdd) return a MAKE_PAPERCLIP after each second',
    () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const action$ = ActionsObservable.of({
        type: actionTypes.START_MEGACLIPPERS
      });

      const state$ = {
        value: {
          business: {
              wire: 4,
              megaClippersToAdd: 1
          }
        }
      }

      scheduler.run(helpers => {
        const {expectObservable} = helpers;
        const expectedMarble = '1s a 999ms b 999ms (c|)';
        const expectedValues = {
          a: { type: actionTypes.MAKE_PAPERCLIP }, 
          b: { type: actionTypes.MAKE_PAPERCLIP }, 
          c: { type: actionTypes.MAKE_PAPERCLIP }
        };
        expectObservable(Epic.startMegaClippersEpic(action$, state$).pipe(take(3))).toBe(expectedMarble, expectedValues)
      })
      }
    )

  it('should (if wire is less than than megaClippersToAdd) return a MAKE_PAPERCLIP after each second',
    () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      const action$ = ActionsObservable.of({
        type: actionTypes.START_MEGACLIPPERS
      });

      const state$ = {
        value: {
          business: {
            wire: 1,
            megaClippersToAdd: 6
          }
        }
      }

      scheduler.run(helpers => {
        const {expectObservable} = helpers;
        const expectedMarble = '1s a 999ms b 999ms (c|)';
        const expectedValues = {
          a: { type: actionTypes.MAKE_PAPERCLIP }, 
          b: { type: actionTypes.MAKE_PAPERCLIP }, 
          c: { type: actionTypes.MAKE_PAPERCLIP }
        };
        expectObservable(Epic.startMegaClippersEpic(action$, state$).pipe(take(3))).toBe(expectedMarble, expectedValues)
      })
      }
    )
});
