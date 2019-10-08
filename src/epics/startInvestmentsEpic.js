import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function startInvestmentsEpic(action$, state$) { 
    return action$
        .ofType(actionTypes.START_INVESTMENTS)
        .mergeMap(action => {
            let deposit = state$.value.business.funds
            return Observable.of(
                Actions.getDeposit(deposit),
                // Actions.startUpdatingScreen()
            )
        })       
}

export default startInvestmentsEpic;
