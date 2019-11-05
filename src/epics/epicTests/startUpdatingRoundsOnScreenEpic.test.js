import { ActionsObservable } from 'redux-observable';
import { toArray, take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import {callHeroes} from './hero';


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
