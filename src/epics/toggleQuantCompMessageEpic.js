import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function toggleQuantCompMessageEpic(action$) {
    return action$
        .ofType(actionTypes.SHOW_QUANT_COMP_MESSAGE)
        .mergeMap(action => {
            return Observable.of(
                // Actions.hideQuantCompMessage(false)
            )
            .delay(1500)
        })       
}

export default toggleQuantCompMessageEpic;
