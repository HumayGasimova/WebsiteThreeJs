/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap 
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

export const checkWireEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.CHECK_EXISTENCE_OF_WIRE),
        mergeMap(action => {
            if(state$.value.business.wire === 0 ){
                return of(
                    Actions.stop(),
                    Actions.wireExists(false)
                ) 
            }else{
                return of(
                    Actions.wireExists(true)
                ) 
            }
                  
        })
    )
    
export default checkWireEpic;
