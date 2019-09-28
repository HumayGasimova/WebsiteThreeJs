import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function addChipEpic(action$, state$) {
    return action$
        .ofType(actionTypes.ADD_CHIP)
        .mergeMap(action => {
           return Observable.of(
                Actions.toggleChip(true, action.obj.chipsNumber)
           ) 
        })       
}

export default addChipEpic;
