import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function raisePriceEpic(action$) { 
    return action$
        .ofType(actionTypes.RAISE_PRICE, actionTypes.LOWER_PRICE)
        .mergeMap(action => {
            return Observable.of(
                Actions.updatePublicDemand(),
                Actions.calcDelayUnsoldInventary(),
                Actions.stopUpdatingUnsoldInventory(),
                Actions.startUpdatingUnsoldInventory(),
            )
        })       
}

export default raisePriceEpic;
