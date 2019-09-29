import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function decreaseOperationsEpic(action$, state$) { 
    return action$
        .ofType(actionTypes.START_DECREASING_OPERATIONS)
        // .take(1)
        .mergeMap(action => {
            return interval(500).pipe(
                mergeMap(() => Observable.of(
                            Actions.decreaseOps()
                        )
                // .delay(1000)
                ),
                takeUntil(action$.ofType(actionTypes.STOP_DECREASING_OPERATIONS))
            )
        })
}

export default decreaseOperationsEpic;
