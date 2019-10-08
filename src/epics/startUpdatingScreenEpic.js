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
        return interval(1000).pipe(
            mergeMap(() => {
                let obj = {
                    stock: "",
                    amt: 0,
                    price: 0,
                    total: 0,
                    profitLoss: 0
                }

                let randomNum = Utility.getRandomNumber(state$.value.business.cash)
console.log(randomNum)
                return Observable.of(
                    Actions.makePaperclip()
                )   
            }
                    // .delay(1000)
                    // .repeat(state$.value.business.autoClippersPerSec)
            ),
            // takeUntil(action$.ofType(actionTypes.STOP))
        )
    })

export default startUpdatingScreenEpic;
