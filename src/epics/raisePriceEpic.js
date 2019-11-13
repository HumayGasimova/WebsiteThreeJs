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

export const raisePriceEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.RAISE_PRICE, actionTypes.LOWER_PRICE),
        mergeMap(action => {
            return of(
                Actions.updatePublicDemand(),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        })     
    )

export default raisePriceEpic;
