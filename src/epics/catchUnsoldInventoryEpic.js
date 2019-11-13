/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap, 
    bufferWhen 
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

export const catchUnsoldInventoryEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.UPDATE_UNSOLD_INVENTORY),
        bufferWhen(()=> interval(1000)),
        mergeMap(events => {
            let unsoldInventoryEvents = events.length;
            let currentPaperclipPrice = state$.value.business.paperclipPrice;
            let avgRevPerSec = unsoldInventoryEvents * currentPaperclipPrice;

            return of(
                Actions.updateAvgRevPerSec(avgRevPerSec),
                Actions.updateAvgClipsSoldPerSec(unsoldInventoryEvents)
            ) 
        })
    )

export default catchUnsoldInventoryEpic;
