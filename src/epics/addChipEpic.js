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

export const addChipEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.ADD_CHIP),
        mergeMap(action => {
           return of(
                Actions.toggleChip(true, action.obj.chipsNumber)
           ) 
        })    
    )
         
export default addChipEpic;
