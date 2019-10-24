import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import { toArray, take } from 'rxjs/operators';

describe('decreaseOpsEpic', () => {

  it('should return DECREASE_OPS',
    () => {
        const scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
  
          const action$ = ActionsObservable.of({
            type: actionTypes.START_DECREASING_OPS
          });
  
          const state$ = {
              value: {
                  business: {
                    delayAutoPaperClippers: 1000
                  }
              }
          }
  
          scheduler.run(helpers => {
            const {expectObservable, cold} = helpers;
            const act = cold('--a--', {a: {type: actionTypes.START_DECREASING_OPS}})
            const expectedMarble = '---b';
            const expectedValues = {
              b: { type: actionTypes.DECREASE_OPS }
            };
            expectObservable(Epic.autoPaperclipsStartEpic(act, state$).pipe(take(3))).toBe(expectedMarble, expectedValues)
          })
    }
  )
});