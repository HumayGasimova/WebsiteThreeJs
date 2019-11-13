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

export const startInvestmentsDepositEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.START_INVESTMENTS_DEPOSIT),
        mergeMap(action => {
            // let deposit = state$.value.business.funds
            return of(
                Actions.getDeposit(),
                Actions.startUpdatingScreen(),
                Actions.startUpdatingInvestmentLines(),
                Actions.startCountingRisk(),
                Actions.startApplyingProfitLoss()
            )
        }) 
    )
        
export default startInvestmentsDepositEpic;
