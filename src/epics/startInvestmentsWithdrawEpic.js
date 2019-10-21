import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const startInvestmentsWithdrawEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.START_INVESTMENTS_WITHDRAW),
        mergeMap(action => {
            let withdraw = state$.value.business.investmentsCash;
            let total;
            if(state$.value.business.investmentsTotal === 0){
                total = 0;
            }else{
                total = state$.value.business.investmentsTotal - withdraw;
            }
            let cash = 0;

            return of(
                Actions.updateInvestmentsTotal(total),
                Actions.updateInvestmentsCash(cash),
                Actions.updateFakeInvestmentsCash(total),
                Actions.updateFundsWithdraw(withdraw)
            )
        })   
    )

export default startInvestmentsWithdrawEpic;
