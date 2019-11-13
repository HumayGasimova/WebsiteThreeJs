/**
* Operators
*/

import { 
  of 
} from 'rxjs';

import { 
  mergeMap, 
  delay 
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

export const tournamentDurationEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.TOURNAMENT_DURATION),
    mergeMap(action => {
        let cellHover = {
          valLeft: 3,
          valTop: 3 
      }
      return of(
        Actions.stopTournament(),
        Actions.showRoundAndPlayers(false),
        Actions.tournamentState(false),
        Actions.toggleCells(cellHover),
      ).pipe(
          delay(state$.value.business.strategicModelingRound * 1000)
      )
    })
  )
      
export default tournamentDurationEpic;
