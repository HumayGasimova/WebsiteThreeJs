import { ActionsObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';

describe('autoPaperclipsStartEpic', () => {

  it('should return a MAKE_PAPERCLIP after each second',
    () => {
    //   // const spy = jest.fn();
    //   const scheduler = new TestScheduler((actual, expected) => {
    //     expect(actual).toEqual(expected);
    //   });
    //   // const action$ = ActionsObservable.of({
    //   //   type: actionTypes.AUTO_PAPERCLIPS_START
    //   // });
    //   // const state$ = {
    //   //   value: {
    //   //     business: {
    //   //       delayAutoPaperClippers: 1000
    //   //     }
    //   //   }
    //   // }
    //   // const epic$ = Epic.autoPaperclipsStartEpic(action$, state$).pipe(
    //   //   interval()
    //   // );
    //   // const array = [];
    //   scheduler.run(
    //     helpers => {
    //       const {expectObservable} = helpers;
    //       const expectedMarble = `1s a 999ms b 999ms c 999ms (d|)`;
    //       const expectedValues = {a: { type: actionTypes.MAKE_PAPERCLIP }, b: { type: actionTypes.MAKE_PAPERCLIP }, c: { type: actionTypes.MAKE_PAPERCLIP }, d: { type: actionTypes.MAKE_PAPERCLIP }};
    //       expectObservable(Epic.autoPaperclipsStartEpic(action$, state$)).toBe(expectedMarble, expectedValues)
        }
      )

});