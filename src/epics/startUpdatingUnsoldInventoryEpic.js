/**
* Operators
*/

import { 
    of, 
    interval, 
    empty 
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

export const startUpdatingUnsoldInventoryEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_UNSOLD_INVENTORY),
        mergeMap(action => {
            return interval(state$.value.business.delayUnsoldInventary).pipe(
                mergeMap(() => {
                    if(state$.value.business.unsoldInventory > 0){
                        // debugger
                        return of(
                                Actions.updateUnsoldInventory(),
                                Actions.updateFunds(state$.value.business.paperclipPrice)
                            )
                        } else{
                            return empty()
                        }
                }),
                takeUntil(action$.ofType(actionTypes.STOP_UPDATING_UNSOLD_INVENTORY))
            )    
        })
    )
            
export default startUpdatingUnsoldInventoryEpic;
