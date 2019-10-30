import { of, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
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

export const startUpdatingPlayerTopOnScreenEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN),
        mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    return of(
                        Actions.updatePlayerTopOnScreen()
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_TOURNAMENT))
            )
        })
    )
   
export default startUpdatingPlayerTopOnScreenEpic;
