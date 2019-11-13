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

export const autoPaperclipsStartEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.AUTO_PAPERCLIPS_START),
        mergeMap(action => {
            return interval(state$.value.business.delayAutoPaperClippers).pipe(
                mergeMap(() => {
                    return of(
                                Actions.makePaperclip()
                            )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP))
            )
       })
    )

export default autoPaperclipsStartEpic;
