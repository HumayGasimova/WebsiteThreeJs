import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';

/**
* Utility
*/

import * as Utility from '../utility';

export const startApplyingProfitLossEpic = (action$, state$) => 
    action$
    .ofType(actionTypes.START_APPLYING_PROFIT_LOSS)
    .mergeMap(action => {
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
            
              
                console.log("HEY", state$.value.business.investmentsStocks, profitLoss)
                return Observable.of(
                    Actions.updateInvestmentsTotal(total),
                    Actions.updateInvestmentsCash(cash),
                    Actions.updateInvestmentsStocks(stocks),
                    Actions.updateFakeInvestmentsCash(total)
                )
            }
                    // .delay(1000)
                    // .repeat(state$.value.business.autoClippersPerSec)
            ),
            // takeUntil(action$.ofType(actionTypes.STOP))
        )
    })

export default startApplyingProfitLossEpic;
