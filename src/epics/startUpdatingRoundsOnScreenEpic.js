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

export const startUpdatingRoundsOnScreenEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_ROUNDS_ON_SCREEN),
        mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    return of(
                        Actions.updateRoundsOnScreen()
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_TOURNAMENT))
            )
        })
    )
   
export default startUpdatingRoundsOnScreenEpic;
