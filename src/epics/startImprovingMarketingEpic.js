import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const startImprovingMarketingEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_IMPROVING_MARKETING),
        mergeMap(action => {
            return Observable.of(
                Actions.improveMarketing(action.act),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        }) 
    )

export default startImprovingMarketingEpic;
