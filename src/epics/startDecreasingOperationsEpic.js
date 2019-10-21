import { Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
// import { interval } from "rxjs"

export const startDecreasingOperationsEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_DECREASING_OPERATIONS),
        switchMap(action => {
            return Observable.of(
                        Actions.startDecreasingOps(),
                        // Actions.addCaptureVal(-action.captureNumber),
                    )
        }),
        // .delay(15000)
        debounceTime(900)
    )
            
export default startDecreasingOperationsEpic;
