/**
* Libraries
*/

import { ActionsObservable } from 'redux-observable';

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

describe('startInvestmentsWithdrawEpic', () => {
  it('should (if investmentsTotal is equal to 0 (total = 0)) return UPDATE_INVESTMENTS_TOTAL, UPDATE_INVESTMENTS_CASH, UPDATE_FAKE_INVESTMENTS_CASH, UPDATE_FUNDS_WITHDRAW',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_INVESTMENTS_WITHDRAW
      });
      const state$ = {
        value: {
            business: {
                investmentsCash: 500,
                investmentsTotal: 0 
            }
        }
      }
      const epic$ = Epic.startInvestmentsWithdrawEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.UPDATE_INVESTMENTS_TOTAL,
            total: 0
        },
        { 
            type: actionTypes.UPDATE_INVESTMENTS_CASH,
            cash: 0
        },
        { 
            type: actionTypes.UPDATE_FAKE_INVESTMENTS_CASH,
            cash: 0
        },
        { 
            type: actionTypes.UPDATE_FUNDS_WITHDRAW,
            val: 500
        }
      ])
    }
  )

  it('should (if investmentsTotal is equal to 0 (total = investmentsTotal - investmentsCash)) return UPDATE_INVESTMENTS_TOTAL, UPDATE_INVESTMENTS_CASH, UPDATE_FAKE_INVESTMENTS_CASH, UPDATE_FUNDS_WITHDRAW',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_INVESTMENTS_WITHDRAW
      });
      const state$ = {
        value: {
            business: {
                investmentsCash: 500,
                investmentsTotal: 700
            }
        }
        }
      const epic$ = Epic.startInvestmentsWithdrawEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.UPDATE_INVESTMENTS_TOTAL,
            total: 200
        },
        { 
            type: actionTypes.UPDATE_INVESTMENTS_CASH,
            cash: 0
        },
        { 
            type: actionTypes.UPDATE_FAKE_INVESTMENTS_CASH,
            cash: 200
        },
        { 
            type: actionTypes.UPDATE_FUNDS_WITHDRAW,
            val: 500
        }
      ])
    }
  )
});
