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

import {
    blogCards
} from '../constants/blogCards';

/**
* Constants
*/

import * as Utility from '../utility';
/**
* Epic
*/

export const startInitPaginationEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_INIT_PAGINATION),
        mergeMap((action) => {
            let portfolioPaging;
            let numberOfPages;

            switch(action.page) {
                case "portfolio":
                    numberOfPages = +(portfolioArray.length / 3).toFixed();
                    portfolioPaging = Utility.getArrayOfPaging(numberOfPages);
                    break;
                case "portfolioSingle":
                    numberOfPages = portfolioArray.length;
                    portfolioPaging = Utility.getArrayOfPaging(numberOfPages);
                    break;
                case "blogPage":
                    numberOfPages = blogCards.length;
                    portfolioPaging = Utility.getArrayOfPaging(numberOfPages);
                    break;
            }
            return of(
                Actions.initPagination(portfolioPaging),
            )   
        }),
                
    )

export default startInitPaginationEpic;
