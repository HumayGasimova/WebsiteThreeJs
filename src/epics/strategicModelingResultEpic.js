/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap, 
    delay 
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

export const strategicModelingResultEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.STRATEGIC_MODELING_RESULT),
        mergeMap(action => {
            return of(
                Actions.startCountingResult(),
            ).pipe(
                delay((state$.value.business.strategicModelingRound * 1000) + 1)
            )
        }) 
    )

export default strategicModelingResultEpic;
