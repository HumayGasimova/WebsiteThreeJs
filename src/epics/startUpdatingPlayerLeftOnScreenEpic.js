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

export const startUpdatingPlayerLeftOnScreenEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN),
        mergeMap(action => {
            return interval((+Math.sqrt(state$.value.business.strategicModelingRound) * 1000) + 1).pipe(
                mergeMap(() => {
                    return of(
                        Actions.updatePlayerLeftOnScreen()
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_TOURNAMENT))
            )
        })
    )
   
export default startUpdatingPlayerLeftOnScreenEpic;
