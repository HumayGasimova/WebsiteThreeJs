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

export const marketingNextLevelEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.MARKETING),
        mergeMap(action => {
            return of(
                Actions.marketingNextLevel(),
                Actions.toggleMarketingButton(),
                Actions.updateMaxPublicDemand(),
                Actions.updatePublicDemand(),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        })      
    )

export default marketingNextLevelEpic;
