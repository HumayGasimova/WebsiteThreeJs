import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/take';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

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
