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

export const startAddingQOpsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_Q_OPS),
        mergeMap(action => {
            return interval(84).pipe(
                mergeMap(() => {
                   return of(
                        Actions.addQOps(action.chipsNumber)
                    )
                }),
                takeUntil(action$.ofType(actionTypes.STOP_ADDING_Q_OPS))
            )
        }) 
    )
    
export default startAddingQOpsEpic;
