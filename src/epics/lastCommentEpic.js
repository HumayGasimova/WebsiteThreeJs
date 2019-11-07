import { of, interval } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
// import { interval } from "rxjs"

export const lastCommentEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.LAST_COMMENTS),
        mergeMap(action => {
            return interval(1500).pipe(
                mergeMap(() => {
                    let commentsArray = state$.value.business.lastComments;
                    commentsArray.shift();
                   return of(
                        Actions.sendCommentToTerminal(commentsArray[0])
                    ).pipe(
                        delay(500)
                    )
                }),
                takeUntil(action$.ofType(actionTypes.STOP_COMMENTS))
            )
        })  
    )
             
export default lastCommentEpic;
