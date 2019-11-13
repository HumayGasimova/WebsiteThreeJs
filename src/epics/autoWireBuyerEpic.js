/**
* Operators
*/

import { 
    of, 
    empty 
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

export const autoWireBuyerEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.AUTO_WIRE_BUYER),
        mergeMap((action) => {
            if(state$.value.business.autoWireBuyerIsOn && state$.value.business.wire === 0){
                return of(
                    Actions.startBuyingWire()
                )
            }else{
                return empty()
            }
        })
    )
        
export default autoWireBuyerEpic;
