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

export const updateYomiEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.UPDATE_YOMI),
    // .take(1)
    mergeMap(action => {
      if(state$.value.business.coherentExtrapolatedVolitionIsThrown === false){
        return of(
          Actions.sendCommentToTerminal(`${state$.value.business.strategyWon} scored ${state$.value.business.valueWon}. Total amount of yomi is ${state$.value.business.yomi}`),
          Actions.addProject(projectsToAdd.CoherentExtrapolatedVolition),
          Actions.toggleThrownProjectCoherentExtrapolatedVolition(true)
        ) 
      }else{
        return of(
          Actions.sendCommentToTerminal(`${state$.value.business.strategyWon} scored ${state$.value.business.valueWon}. Total amount of yomi is ${state$.value.business.yomi}`),
        ) 
      }
       
    })
  )

export default updateYomiEpic;
