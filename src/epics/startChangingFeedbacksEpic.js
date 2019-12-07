/**
* Operators
*/

import { 
    of,
    interval
} from 'rxjs';

import { 
    mergeMap,
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
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startChangingFeedbacksEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_CHANGING_FEEDBACKS),
        mergeMap(action => {
            return interval(3000).pipe(
                mergeMap(() => {
                    console.log("fdf")
                    return of(
                        Actions.feedbackOnChange(),
                        // Actions.dotOnChange(),
                    )   
                }),
                // takeUntil(action$.ofType(actionTypes.STOP_CHANGING_FEEDBACKS))
            )
    })
    )
    
         
export default startChangingFeedbacksEpic;
