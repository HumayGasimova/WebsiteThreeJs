/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startCountingRiskEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_COUNTING_RISK),
        mergeMap(action => {
            return interval(9000).pipe(
                mergeMap(() => {
                    let depositCash = +state$.value.business.fakeInvestmentsCash;
                    let half1 = Utility.getRandomPercent();
                    let half2 = 100 - half1;
                    let cash = +(depositCash * half1 /100).toFixed();
                    let stocks = +(depositCash * half2 /100).toFixed();
                    let total = cash + stocks;
    
                    return of(
                        Actions.updateInvestmentsTotal(total),
                        Actions.updateInvestmentsCash(cash),
                        Actions.updateInvestmentsStocks(stocks),
                    )   
                })
            )
        })
    )
    
export default startCountingRiskEpic;
