/**
* Operators
*/

import { 
  of 
} from 'rxjs';

import { 
  mergeMap 
} from 'rxjs/operators';

import { 
  ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const updateStrategicModelingCurrentListEpic = (action$) => 
  action$.pipe(
    ofType(actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST),
    mergeMap(action => {
        return of(
          Actions.updateStrategicModelingRound(action.round)
        ) 
    })
  )

export default updateStrategicModelingCurrentListEpic;
