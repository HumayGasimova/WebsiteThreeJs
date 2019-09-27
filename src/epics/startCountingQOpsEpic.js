import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function startCountingQOpsEpic(action$, state$) {
    return action$
        .ofType(actionTypes.START_ADDING_Q_OPS)
        .mergeMap(action => {
            return interval(84).pipe(
                mergeMap(() => {
                   return Observable.of(
                        Actions.addQOps()
                    )
                }),
                takeUntil(action$.ofType(actionTypes.STOP_ADDING))
            )
        })       
}

export default startCountingQOpsEpic;
