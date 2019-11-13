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

export const updateYomiEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.UPDATE_YOMI),
    mergeMap(action => {
      if(state$.value.business.coherentExtrapolatedVolitionIsThrown === false){
        return of(
          Actions.sendCommentToTerminal(`${state$.value.business.strategyWon} scored ${state$.value.business.valueWon}. Total amount of yomi is ${state$.value.business.yomi}`),
          Actions.addProject(projectsToAdd.CoherentExtrapolatedVolition),
          Actions.toggleThrownProject('coherentExtrapolatedVolition', true)
        ) 
      }else{
        return of(
          Actions.sendCommentToTerminal(`${state$.value.business.strategyWon} scored ${state$.value.business.valueWon}. Total amount of yomi is ${state$.value.business.yomi}`)
        ) 
      }
    })
  )

export default updateYomiEpic;
