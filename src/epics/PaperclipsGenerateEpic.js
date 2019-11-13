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

export const paperclipsGenerateEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_SELLING),
        mergeMap(action => {
            return of(
                Actions.makePaperclip()
            )
        })    
    )
          
export default paperclipsGenerateEpic;
