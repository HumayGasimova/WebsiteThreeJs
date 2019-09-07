import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function paperclipsGenerateEpic(action$) { 
    return action$
        .ofType(actionTypes.START_SELLING)
        .mergeMap(action => {
            return Observable.of(Actions.makePaperclip(action.priceOfPaperclip, action.delay))
        })       
}

export default paperclipsGenerateEpic;
