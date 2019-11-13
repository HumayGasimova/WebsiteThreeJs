/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    switchMap, 
    delay, 
    repeat 
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

export const decreaseOpsEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_DECREASING_OPS),
        switchMap(action => {
            return of(
                        Actions.decreaseOps()
                    ).pipe(
                        delay(10),
                        repeat(state$.value.business.ops-state$.value.business.opsMax)  
                    )          
        })
    )

export default decreaseOpsEpic;
