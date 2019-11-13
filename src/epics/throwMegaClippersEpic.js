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
import * as projectsToAdd from '../constants/projectsToAdd';

/**
* Epic
*/

export const throwMegaClippersEpic = (action$) => 
  action$.pipe(
    ofType(actionTypes.ADD_MEGA_CLIPPERS),
    mergeMap(action => {
        return of(
          Actions.addProject(projectsToAdd.MegaClippers)
        ) 
    })
  )

export default throwMegaClippersEpic;
