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

export const startUpdatingScreenEpic = (action$, state$) => 
    action$
    .ofType(actionTypes.START_UPDATING_SCREEN)
    .mergeMap(action => {
        return interval(state$.value.business.delayUpdatingInvScreen).pipe(
            mergeMap(() => {
                let randomNum = Utility.getRandomAmount(state$.value.business.fakeInvestmentsCash);
                let randomPrice = Utility.getRandomPrice();
                let randomProfitLoss = Utility.getRandomProfitLoss();
                let randomLetters = Utility.getRandomLetters();
                let obj = {
                    stock: randomLetters,
                    amt: randomNum,
                    price: randomPrice,
                    total: randomNum * randomPrice,
                    profitLoss: randomNum * randomProfitLoss
                }
                
                return Observable.of(
                    Actions.addInvestmentsLine(obj, true)
                )   
            }
                    // .delay(1000)
                    // .repeat(state$.value.business.autoClippersPerSec)
            ),
            takeUntil(action$.ofType(actionTypes.STOP_UPDATING_SCREEN))
        )
    })

export default startUpdatingScreenEpic;
