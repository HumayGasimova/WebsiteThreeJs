/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap, 
    bufferWhen 
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

export const catchPaperclipsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.MAKE_PAPERCLIP),
        bufferWhen(()=> interval(1000)),
        mergeMap(events => {
            let paperclipsPerSec = events.length
            return of(
                Actions.updateClipsPerSec(paperclipsPerSec)
            ) 
        })
    )

export default catchPaperclipsEpic;
