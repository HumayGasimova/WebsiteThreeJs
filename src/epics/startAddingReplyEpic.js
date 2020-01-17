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
* Epic
*/

export const startAddingReplyEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_REPLY),
        mergeMap((action) => {
            let singlePortfolio = {...state$.value.home.singlePortfolio};

            switch(action.thread){
                case 0:
                    // singlePortfolio.comments.array.find(x => x.id === action.id).reply.arrayOfReplies.push()
                    break;
                case 1: ''
                    break;
                case 2: 
                    break;
            }
            console.log(action.inputIsShown, action.thread, action.userId, action.array)
                return of(
                    // Actions.toggleInputIsShown(),
                    // Actions.dotOnChange(),
                )   
            })
    )

export default startAddingReplyEpic;
