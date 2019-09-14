import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function initialProjectsEpic(action$) { 
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
        .mergeMap(action => {
            return Observable.of(
              
            ) 
        })
}

export default initialProjectsEpic;
