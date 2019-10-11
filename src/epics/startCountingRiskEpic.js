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

export const startCountingRiskEpic = (action$, state$) => 
    action$
    .ofType(actionTypes.START_COUNTING_RISK)
    .mergeMap(action => {
        return interval(12000).pipe(
            mergeMap(() => {
               let half1 = Utility.getRandomPercent();
               let half2 = 100 - half1;
               let total = +state$.value.business.investmentsCash;
               let cash = +(total * half1 /100).toFixed();
               let stocks = +(total * half2 /100).toFixed();
              

            //    switch(state$.value.business.risk){
            //        case "lowRisk":
            //             if(half1 > half2){
            //                 cash = 
            //             }
            //            return
            //            break;
            //         case "medRisk":
            //            return
            //            break;
            //         case "highRisk":
            //             return
            //             break;
            //    }
console.log("HEY", total, cash, stocks)
                return Observable.of(
                    Actions.updateInvestmentsTotal(total),
                    Actions.updateInvestmentsCash(cash),
                    Actions.updateInvestmentsStocks(stocks),
                )   
            }
                    // .delay(1000)
                    // .repeat(state$.value.business.autoClippersPerSec)
            ),
            // takeUntil(action$.ofType(actionTypes.STOP))
        )
    })

export default startCountingRiskEpic;
