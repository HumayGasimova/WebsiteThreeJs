import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function autoPaperclipsStartsEpic(action$) {
    return action$
        .ofType(actionTypes.AUTO_PAPERCLIPS_START)
        .mergeMap(action => {
            return Observable.of(
                Actions.autoClippersAddOne()
            )
        })       
}

export default autoPaperclipsStartsEpic;
