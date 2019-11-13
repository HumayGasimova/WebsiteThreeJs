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

export const startImprovingMarketingEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_IMPROVING_MARKETING),
        mergeMap(action => {
            return of(
                Actions.improveMarketing(action.act),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        }) 
    )

export default startImprovingMarketingEpic;
