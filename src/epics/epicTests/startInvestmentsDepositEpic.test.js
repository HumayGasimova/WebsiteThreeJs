/**
* Libraries
*/

import { 
  ActionsObservable 
} from 'redux-observable';

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

describe('startInvestmentsDepositEpic', () => {
  it('should return GET_DEPOSIT, START_UPDATING_SCREEN, START_UPDATING_INVESTMENTS_LINE, START_COUNTING_RISK, START_APPLYING_PROFIT_LOSS',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_INVESTMENTS_DEPOSIT
      });
      const epic$ = Epic.startInvestmentsDepositEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.GET_DEPOSIT },
        { type: actionTypes.START_UPDATING_SCREEN },
        { type: actionTypes.START_UPDATING_INVESTMENTS_LINE },
        { type: actionTypes.START_COUNTING_RISK },
        { type: actionTypes.START_APPLYING_PROFIT_LOSS }
      ])
    }
  )
});
