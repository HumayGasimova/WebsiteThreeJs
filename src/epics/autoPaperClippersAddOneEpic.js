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

export const autoPaperClippersAddOneEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.AUTO_PAPERCLIPS),      
        mergeMap(action => {
            return of(
                Actions.autoClippersAddOne(),
                Actions.autoPaperclipsStart(),
                Actions.switchOffOrOnAutoAndMegaClippers(true)
            )    
        }) 
    )
       
export default autoPaperClippersAddOneEpic;
