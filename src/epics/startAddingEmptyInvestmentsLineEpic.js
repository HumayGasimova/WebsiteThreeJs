import { of, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
// import { interval } from "rxjs"

export const startAddingEmptyInvestmentsLineEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE),
        mergeMap(action => {
            let randomNum = Math.floor(Math.random()*9)+2;
            return interval(randomNum*1000).pipe(
                mergeMap(() => {
                   return of(
                        Actions.addInvestmentsLine('', false)
                    ) 
                }),
                takeUntil(action$.ofType(actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE))
            )
        })      
    )

export default startAddingEmptyInvestmentsLineEpic;
