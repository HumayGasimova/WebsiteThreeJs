import { ActionsObservable } from 'redux-observable';
import { toArray, take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import {callHeroes} from './hero';


describe('startAddingQOpsEpic', () => {

  it('should return a UPDATE_INVESTMENTS_TOTAL, UPDATE_INVESTMENTS_CASH, UPDATE_INVESTMENTS_STOCKS, UPDATE_FAKE_INVESTMENTS_CASH after each 15 s',
    () => {
        // const scheduler = new TestScheduler((actual, expected) => {
        //   expect(actual).toEqual(expected);
        // });

        // const action$ = ActionsObservable.of({
        //     type: actionTypes.START_APPLYING_PROFIT_LOSS
        // });

        // const state$ = {
        //     value: {
        //         business: {
        //             investmentsLines: [{profitLoss: -60}],
        //             investmentsStocks: 50,
        //             investmentsCash: 70
        //         }
        //     }
        // }

        // scheduler.run(helpers => {
        //   const {expectObservable} = helpers;
        //   const expectedMarble = '15s a (|)';
        //   const expectedValues = {
        //     a: { 
        //         type: actionTypes.UPDATE_INVESTMENTS_TOTAL,
        //         total: 120
        //     },
        //     a: { 
        //         type: actionTypes.UPDATE_INVESTMENTS_CASH,
        //         cash: 70
        //     },
        //     a: { 
        //         type: actionTypes.UPDATE_INVESTMENTS_STOCKS,
        //         stocks: 50
        //     },
        //     a: { 
        //         type: actionTypes.UPDATE_FAKE_INVESTMENTS_CASH,
        //         cash: 120
        //     }
        //   };
        //   expectObservable(Epic.startApplyingProfitLossEpic(action$, state$).pipe(take(4))).toBe(expectedMarble, expectedValues)
        // })
        }
      )
});
