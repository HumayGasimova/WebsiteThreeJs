import { of, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
// import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';

/**
* Utility
*/

import * as Utility from '../utility';

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
                    return of(
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
    )
    
export default startCountingRiskEpic;
