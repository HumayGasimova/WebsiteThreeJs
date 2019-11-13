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

export const checkAutoAndMegaClippersIsOnEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.STOP),
        mergeMap(action => {
           return of(
                Actions.switchOffOrOnAutoAndMegaClippers(false)
           ) 
        })    
    )
         
export default checkAutoAndMegaClippersIsOnEpic;
