import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/of';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

// import { mergeMap, of } from 'rxjs/operators';

// import { mergeMap } from 'rxjs/operators';
// import { ofType } from 'redux-observable';

function paperclipsGenerateEpic(action$) {
    return action$
        .ofType(actionTypes.START_SELLING)
        .mergeMap(action => {
            return Observable.of(
                Actions.makePaperclip()
            )
        })       
}

export default paperclipsGenerateEpic;
