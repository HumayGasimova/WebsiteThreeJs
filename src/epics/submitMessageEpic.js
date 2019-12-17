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

export const submitMessageEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.SUBMIT_MESSAGE),
        mergeMap(action => {

            // let message = action$.message;
                    return of(
                        // Actions.feedbackOnChange(),
                        // Actions.dotOnChange(),
                    )   
                })
    )
    
         
export default submitMessageEpic;
