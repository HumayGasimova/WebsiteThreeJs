/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap, 
    takeUntil, 
    repeat 
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

export const startMegaClippersEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_MEGACLIPPERS),
        mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    let wire = state$.value.business.wire;

                    if(wire >= state$.value.business.megaClippersToAdd){
                        return of(
                            Actions.makePaperclip()
                        ).pipe(
                            repeat(state$.value.business.megaClippersToAdd)
                        )
                    }else{
                        return of(
                            Actions.makePaperclip()
                        ).pipe(
                            repeat(wire)
                        )
                    }
                }),
                takeUntil(action$.ofType(actionTypes.STOP))
            )
       })
    )
    
export default startMegaClippersEpic;
