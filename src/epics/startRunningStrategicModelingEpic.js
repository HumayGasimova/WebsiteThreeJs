import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
// import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';

export const startRunningStrategicModelingEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_RUNNING_STRATEGIC_MODELING),
        mergeMap(action => {
           switch(state$.value.business.listStrategicModeling){
                case "A100":
                    return
                    break;
                case "B100":
                    return
                    break;
                case "GREEDY":
                    return
                    break;
                case "GENEROUS":
                    return
                    break;
                case "MINIMAX":
                    return
                    break;
                case "TIT FOR TAT":
                    return
                    break;
                case "BEAT LAST":
                    return
                    break;
           }
            return of(
                Actions.tournamentState(false),
                Actions.toggleNewTournamentButton()
            ) 
        })
    ) 
    
export default startRunningStrategicModelingEpic;
