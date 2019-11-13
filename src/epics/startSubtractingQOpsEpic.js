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
* Epic
*/

export const startSubtractingQOpsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_SUBTRACTING_Q_OPS),
        mergeMap(action => {
            return interval(84).pipe(
                mergeMap(() => {
                   return of(
                        Actions.subtractQOps(action.chipsNumber)
                    )
                }),
                takeUntil(action$.ofType(actionTypes.STOP_SUBTRACTING_Q_OPS))
            )
        })  
    )
             
export default startSubtractingQOpsEpic;
