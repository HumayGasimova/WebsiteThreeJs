import { ActionsObservable } from 'redux-observable';
import { toArray, take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import {callHeroes} from './hero';


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
          expectObservable(Epic.startAddingQOpsEpic(action$).pipe(take(2))).toBe(expectedMarble, expectedValues)
        })
        }
      )
});
