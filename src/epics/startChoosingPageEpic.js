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
import {
    portfolioArray
} from '../constants/portfolio';

/**
* Constants
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startChoosingPageEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_CHOOSING_PAGE),
        mergeMap((action) => {
            let updatedPortfolio = [...portfolioArray];
            updatedPortfolio = updatedPortfolio.slice((action.id * 3) - 3, action.id * 3);
            return of(
                Actions.choosePage(action.id),
                Actions.loadPortfolioAccordingToPage(updatedPortfolio),
                Actions.disablePaginationArrowButton("arrowLeft"),
                Actions.disablePaginationArrowButton("arrowRight")
            )   
        }),
                
    )

export default startChoosingPageEpic;
