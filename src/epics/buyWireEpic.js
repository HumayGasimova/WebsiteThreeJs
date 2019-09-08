import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function buyWireEpic (action$) {
    return action$
        .ofType(actionTypes.START_BUYING_WIRE)
        .mergeMap(action => {
            return Observable.of(
                Actions.buyWire(),
                Actions.toggleWireButton()
            )
        })       
}

export default buyWireEpic;
