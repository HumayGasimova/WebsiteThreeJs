/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    switchMap, 
    debounceTime 
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

export const startDecreasingOperationsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_DECREASING_OPERATIONS),
        switchMap(action => {
            return of(
                        Actions.startDecreasingOps()
                    )
        }),
        debounceTime(900)
    )
            
export default startDecreasingOperationsEpic;
