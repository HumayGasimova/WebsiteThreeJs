import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function startDecreasingOperationsEpic(action$, state$) { 
        return action$
            .ofType(actionTypes.START_DECREASING_OPERATIONS)
            .mergeMap(action => {
                return Observable.of(
                            Actions.startDecreasingOps(action.captureNumber),
                            // Actions.addCaptureVal(-action.captureNumber),
                        )
            })
            .delay(4000)
    }

export default startDecreasingOperationsEpic;
