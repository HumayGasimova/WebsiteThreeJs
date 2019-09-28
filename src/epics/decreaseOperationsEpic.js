import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function decreaseOperationsEpic(action$, state$) { 
    return action$
        .ofType(actionTypes.START_DECREASING_OPERATIONS)
        .mergeMap(action => {
            return Observable.of(
                Actions.decreaseOps(),
            ) 
            .delay(1000)
        })
}

export default decreaseOperationsEpic;
