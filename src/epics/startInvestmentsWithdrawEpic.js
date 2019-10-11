import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function startInvestmentsWithdrawEpic(action$, state$) { 
    return action$
        .ofType(actionTypes.START_INVESTMENTS_WITHDRAW)
        .mergeMap(action => {
            let withdraw = state$.value.business.investmentsCash;
            let total;
            if(state$.value.business.investmentsTotal === 0){
                total = 0;
            }else{
                total = state$.value.business.investmentsTotal - withdraw;
            }
            let cash = 0;

            return Observable.of(
                Actions.updateInvestmentsTotal(total),
                Actions.updateInvestmentsCash(cash),
                Actions.updateFakeInvestmentsCash(total),
                Actions.updateFundsWithdraw(withdraw)
            )
        })       
}

export default startInvestmentsWithdrawEpic;
