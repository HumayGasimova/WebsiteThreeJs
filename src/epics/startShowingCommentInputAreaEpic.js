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

export const startShowingCommentInputAreaEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_SHOWING_COMMENT_INPUT_AREA),
        mergeMap((action) => {
            let singlePortfolio = {...state$.value.home.singlePortfolio};
            let updatedObj;
            let updatedObjIndex;

            switch(action.thread){
                case 0:
                    updatedObj = {...singlePortfolio.comments.array.find(x => x.id === action.userId), inputIsShown: true};
                    updatedObjIndex = singlePortfolio.comments.array.findIndex(x => x.id === action.userId);
                    singlePortfolio.comments.array.splice(updatedObjIndex, 1, updatedObj);
                    break;
                case 1: ''
                    break;
                case 2: 
                    break;
            }
            // console.log(action.inputIsShown, action.thread, action.userId)

                return of(
                    Actions.loadSinglePortfolio(singlePortfolio),
                    // Actions.dotOnChange(),
                )   
            })
    )

export default startShowingCommentInputAreaEpic;
