import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function marketingNextLevelEpic (action$) {
    return action$
        .ofType(actionTypes.MARKETING)
        .mergeMap(action => {
            return Observable.of(
                Actions.marketingNextLevel(),
                Actions.toggleMarketingButton(),
                Actions.updateMaxPublicDemand(),
                Actions.updatePublicDemand(),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory()
            )
        })       
}

export default marketingNextLevelEpic;
