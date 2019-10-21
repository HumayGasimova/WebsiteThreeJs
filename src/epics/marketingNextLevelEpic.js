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

export const marketingNextLevelEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.MARKETING),
        mergeMap(action => {
            return of(
                Actions.marketingNextLevel(),
                Actions.toggleMarketingButton(),
                Actions.updateMaxPublicDemand(),
                Actions.updatePublicDemand(),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        })      
    )

export default marketingNextLevelEpic;
