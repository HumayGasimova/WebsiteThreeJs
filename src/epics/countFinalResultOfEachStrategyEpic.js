import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import * as Utility from '../utility';

export const countFinalResultOfEachStrategyEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.COUNT_FINAL_RESULT_OF_EACH_STRATEGY),
        mergeMap(action => {
            let results = [...state$.value.business.allRoundsResWithValues];
            let plLeftRandom = results.filter(x => x.playerLeft.strategy === "RANDOM");
            let plTopRandom = results.filter(x => x.playerTop.strategy === "RANDOM");

            let plLeftA100 = results.filter(x => x.playerLeft.strategy === "A100");
            let plTopA100 = results.filter(x => x.playerTop.strategy === "A100");

            let plLeftB100 = results.filter(x => x.playerLeft.strategy === "B100");
            let plTopB100 = results.filter(x => x.playerTop.strategy === "B100");

            let plLeftGreedy = results.filter(x => x.playerLeft.strategy === "GREEDY");
            let plTopGreedy = results.filter(x => x.playerTop.strategy === "GREEDY");

            let plLeftGenerous = results.filter(x => x.playerLeft.strategy === "GENEROUS");
            let plTopGenerous = results.filter(x => x.playerTop.strategy === "GENEROUS");

            let plLeftMiniMax = results.filter(x => x.playerLeft.strategy === "MINIMAX");
            let plTopMiniMax = results.filter(x => x.playerTop.strategy === "MINIMAX");

            let plLeftTitForTat = results.filter(x => x.playerLeft.strategy === "TIT FOR TAT");
            let plTopTitForTat = results.filter(x => x.playerTop.strategy === "TIT FOR TAT");

            let plLeftBeatLast = results.filter(x => x.playerLeft.strategy === "BEAT LAST");
            let plTopBeatLast = results.filter(x => x.playerTop.strategy === "BEAT LAST");

            let allResults = {
                random: plLeftRandom.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftRandom, plTopRandom),
                a100: plLeftA100.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftA100, plTopA100),
                b100: plLeftB100.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftB100, plTopB100),
                greedy: plLeftGreedy.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftGreedy, plTopGreedy),
                generouse: plLeftGenerous.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftGenerous, plTopGenerous),
                miniMax: plLeftMiniMax.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftMiniMax, plTopMiniMax),
                titForTat: plLeftTitForTat.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftTitForTat, plTopTitForTat),
                beatLast: plLeftBeatLast.length === 0 ? 0 : Utility.getStrategyModelingResult(plLeftBeatLast, plTopBeatLast)      
            }

            console.log("RANDOM", allResults)
            return of(
                Actions.updateListOfFinalResult(allResults),
                Actions.fillWithValuesStrategicModelingCurrentList(),
                Actions.toggleStrategicModelingLeftPart(true),
                Actions.updateYomi()
            )
        }) 
    )

export default countFinalResultOfEachStrategyEpic;
