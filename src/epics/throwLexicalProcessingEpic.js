import { of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/take';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import * as projectsToAdd from '../constants/projectsToAdd';

export const throwLexicalProcessingEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.ADD_LEXICAL_PROCESSING),
    take(1),
    mergeMap(action => {
        return of(
          Actions.addProject(projectsToAdd.LexicalProcessing)
        ) 
    })
  )

export default throwLexicalProcessingEpic;
