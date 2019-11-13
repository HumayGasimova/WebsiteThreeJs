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

export const startUpdatingScreenEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_SCREEN),
        mergeMap(action => {
            return interval(state$.value.business.delayUpdatingInvScreen).pipe(
                mergeMap(() => {
                    let randomNum = Utility.getRandomAmount(state$.value.business.fakeInvestmentsCash);
                    let randomPrice = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomProfitLoss = Utility.getRandomProfitLoss();
                    let randomLetters = Utility.getRandomLetters();
                    let obj = {
                        stock: randomLetters,
                        amt: randomNum,
                        price: randomPrice,
                        total: randomNum * randomPrice,
                        profitLoss: randomNum * randomProfitLoss
                    }
                    
                    return of(
                        Actions.addInvestmentsLine(obj, true)
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_UPDATING_SCREEN))
            )
        })
    )
   
export default startUpdatingScreenEpic;
