import { ActionsObservable } from 'redux-observable';
import { toArray, take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import {callHeroes} from './hero';


describe('startUpdatingPlayerTopOnScreenEpic', () => {

  it('should return a UPDATE_PLAYER_TOP_ON_SCREEN after each 1001ms',
    () => {
        const scheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        const action$ = ActionsObservable.of({
          type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN
        });

        scheduler.run(helpers => {
          const {expectObservable} = helpers;
          const expectedMarble = '1001ms a 1s b 1s (c|)';
          const expectedValues = {
            a: { type: actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN }, 
            b: { type: actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN }, 
            c: { type: actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN }
          };
          expectObservable(Epic.startUpdatingPlayerTopOnScreenEpic(action$).pipe(take(3))).toBe(expectedMarble, expectedValues)
        })
    })

});
