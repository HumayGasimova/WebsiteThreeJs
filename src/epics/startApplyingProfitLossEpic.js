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
* Epic
*/

export const startApplyingProfitLossEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_APPLYING_PROFIT_LOSS),
        mergeMap(action => {
            return interval(15000).pipe(
                mergeMap(() => {
                    let firstLine = state$.value.business.investmentsLines[0];
                    let profitLoss = firstLine.profitLoss;
                    let stocks;
    
                    if(state$.value.business.investmentsStocks + profitLoss >= 0){
                        stocks = state$.value.business.investmentsStocks + profitLoss;
                    }else{
                        stocks = state$.value.business.investmentsStocks
                    }
                   
                    let cash = state$.value.business.investmentsCash
                    let total = cash + stocks;
                  
                    return of(
                        Actions.updateInvestmentsTotal(total),
                        Actions.updateInvestmentsCash(cash),
                        Actions.updateInvestmentsStocks(stocks),
                        Actions.updateFakeInvestmentsCash(total)
                    )
                })
            )
        })
    )

export default startApplyingProfitLossEpic;
