import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/of';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

// import { mergeMap, of } from 'rxjs/operators';

// import { mergeMap } from 'rxjs/operators';
// import { ofType } from 'redux-observable';

export const paperclipsGenerateEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_SELLING),
        mergeMap(action => {
            return of(
                Actions.makePaperclip()
            )
        })    
    )
          
export default paperclipsGenerateEpic;
