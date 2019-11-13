/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap, 
    delay, 
    takeUntil 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

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
