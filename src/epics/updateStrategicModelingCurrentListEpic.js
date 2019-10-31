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

export const updateStrategicModelingCurrentListEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST),
    mergeMap(action => {
        return of(
          Actions.updateStrategicModelingRound(action.round),
          // Actions.updateNumberOfRounds(action.round),
        ) 
    })
  )

export default updateStrategicModelingCurrentListEpic;
