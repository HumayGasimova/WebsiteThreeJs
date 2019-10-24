import { ActionsObservable } from 'redux-observable';
import { toArray, take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import {callHeroes} from './hero';


describe('startAddingEmptyInvestmentsLineEpic', () => {

  it('should return a MAKE_PAPERCLIP after each second',
    () => {
        // const scheduler = new TestScheduler((actual, expected) => {
        //   expect(actual).toEqual(expected);
        // });

        // const action$ = ActionsObservable.of({
        //   type: actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE
        // });

        // const state$ = {
        //     value: {
        //         business: {
        //           delayAutoPaperClippers: 1000
        //         }
        //     }
        // }

        // scheduler.run(helpers => {
        //   const {expectObservable} = helpers;
        //   const expectedMarble = '1s a 999ms b 999ms (c|)';
        //   const expectedValues = {
        //     a: { type: actionTypes.MAKE_PAPERCLIP }, 
        //     b: { type: actionTypes.MAKE_PAPERCLIP }, 
        //     c: { type: actionTypes.MAKE_PAPERCLIP }
        //   };
        //   expectObservable(Epic.autoPaperclipsStartEpic(action$, state$).pipe(take(3))).toBe(expectedMarble, expectedValues)
        // })

        }
      )

});