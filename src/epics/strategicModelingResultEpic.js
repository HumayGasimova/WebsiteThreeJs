import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const strategicModelingResultEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.STRATEGIC_MODELING_RESULT),
        mergeMap(action => {
            return of(
                Actions.startCountingResult(),
            ).pipe(
                delay((state$.value.business.strategicModelingRound * 1000) + 1)
            )
        }) 
    )

export default strategicModelingResultEpic;
