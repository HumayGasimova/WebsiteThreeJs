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
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const submitMessageEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.SUBMIT_MESSAGE),
        mergeMap(action => {
            let info = {
                name: action.name,
                email: action.email,
                contact: action.contact,
                company: action.company,
                message: action.message
            }
                    return of(
                        Actions.messageToSend(info),
                    )   
                })
    )
    
         
export default submitMessageEpic;
