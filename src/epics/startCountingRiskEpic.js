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
    .ofType(actionTypes.START_UPDATING_INVESTMENTS_LINE)
    .mergeMap(action => {
        return interval(3000).pipe(
            mergeMap(() => {
               
                return Observable.of(
                    // Actions.updateInvestmentsLines(investmentsLines)
                )   
            }
                    // .delay(1000)
                    // .repeat(state$.value.business.autoClippersPerSec)
            ),
            // takeUntil(action$.ofType(actionTypes.STOP))
        )
    })

export default startCountingRiskEpic;
