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
            let plTopRandom = results.filter(x => x.playerLeft.strategy === "RANDOM");

            let plLeftA100 = results.filter(x => x.playerLeft.strategy === "A100");
            let plTopA100 = results.filter(x => x.playerLeft.strategy === "A100");

            let plLeftB100 = results.filter(x => x.playerLeft.strategy === "B100");
            let plTopB100 = results.filter(x => x.playerLeft.strategy === "B100");

            let plLeftGreedy = results.filter(x => x.playerLeft.strategy === "GREEDY");
            let plTopGreedy = results.filter(x => x.playerLeft.strategy === "GREEDY");

            let plLeftGenerous = results.filter(x => x.playerLeft.strategy === "GENEROUS");
            let plTopGenerous = results.filter(x => x.playerLeft.strategy === "GENEROUS");

            let plLeftMiniMax = results.filter(x => x.playerLeft.strategy === "MINIMAX");
            let plTopMiniMax = results.filter(x => x.playerLeft.strategy === "MINIMAX");

            let plLeftTitForTat = results.filter(x => x.playerLeft.strategy === "TIT FOR TAT");
            let plTopTitForTat = results.filter(x => x.playerLeft.strategy === "TIT FOR TAT");

            let plLeftBeatLast = results.filter(x => x.playerLeft.strategy === "BEAT LAST");
            let plTopBeatLast = results.filter(x => x.playerLeft.strategy === "BEAT LAST");

            let allResults = {
                random: plLeftRandom !== [] ? Utility.getStrategyModelingResult(plLeftRandom, plTopRandom, "RANDOM") : 0,
                a100: plLeftA100 !== [] ? Utility.getStrategyModelingResult(plLeftA100, plTopA100, "A100") : 0,
                b100: plLeftB100 !== [] ? Utility.getStrategyModelingResult(plLeftB100, plTopB100, "B100") : 0,
                greedy: plLeftGreedy !== [] ? Utility.getStrategyModelingResult(plLeftGreedy, plTopGreedy, "GREEDY") : 0,
                generouse: plLeftGenerous !== [] ? Utility.getStrategyModelingResult(plLeftGenerous, plTopGenerous, "GENEROUS") : 0,
                miniMax: plLeftMiniMax !== [] ? Utility.getStrategyModelingResult(plLeftMiniMax, plTopMiniMax, "MINIMAX") : 0,
                titForTat: plLeftTitForTat !== [] ? Utility.getStrategyModelingResult(plLeftTitForTat, plTopTitForTat, "TIT FOR TAT") : 0,
                beatLast: plLeftBeatLast !== [] ? Utility.getStrategyModelingResult(plLeftBeatLast, plTopBeatLast, "BEAT LAST") : 0       
            }

            console.log("RANDOM", allResults)
            return of(
                // Actions.updatedAllRoundsRes(updatedObj),
                // Actions.countFinalResultOfEachStrategy(),
            )
        }) 
    )

export default countFinalResultOfEachStrategyEpic;
