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

export const startUpdatingPlayerTopOnScreenEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN),
        mergeMap(action => {
            return interval(1001).pipe(
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
