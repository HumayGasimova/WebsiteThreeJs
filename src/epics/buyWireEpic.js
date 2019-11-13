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

export const buyWireEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_BUYING_WIRE),
        mergeMap((action) => {
            return of(
                Actions.buyWire(),
                Actions.toggleWireButton(),
                Actions.toggleMakePaperclipButton(false)                
            )
        })  
    )

export default buyWireEpic;
