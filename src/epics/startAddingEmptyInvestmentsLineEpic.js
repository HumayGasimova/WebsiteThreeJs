import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function startAddingEmptyInvestmentsLineEpic(action$, state$) {
    return action$
        .ofType(actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE)
        .mergeMap(action => {
            return interval(random).pipe(
                mergeMap(() => {
                   return Observable.of(
                        // Actions.addQOps(action.chipsNumber)
                    ) 
                    .repeat(random)
                }),
                takeUntil(action$.ofType(actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE))
            )
        })            
}

export default startAddingEmptyInvestmentsLineEpic;
