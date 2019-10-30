import { of, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
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
/**
* Utility
*/

import * as Utility from '../utility';

export const gameStartedEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.GAME_STARTED),
        mergeMap(action => {
            return interval(125).pipe(
                mergeMap(() => {
                   let plLeftVal;
                   let plTopVal;
                   let allRes = state$.value.business.allRoundsRes;
                   let lastElement = allRes.length-1;
                    switch(state$.value.business.playerLeftStrategyList[0]){
                        case "RANDOM":
                            plLeftVal = Utility.getRandomStrategyVal();
                            break;
                        case "A100":
                            plLeftVal = 1;
                            break;
                        case "B100":
                            plLeftVal = 2;
                            break;
                        case "GREEDY":
                            plLeftVal = 1; //vseqda odin tak viqodno emu
                            break;
                        case "GENEROUS":
                            if(allRes.length !== 0 && allRes[lastElement].playerLeft.strategy === "GENEROUS"){
                                plLeftVal = allRes[lastElement].playerTop.val === 1 ? 2 : 1; 
                            }else{
                                plLeftVal = Utility.getRandomStrategyVal();
                            } //dobrak
                            break;
                        case "MINIMAX":
                            if(allRes.length !== 0 && allRes[lastElement].playerLeft.strategy === "MINIMAX"){
                                plLeftVal = allRes[lastElement].playerTop.val
                            }else{
                                plLeftVal = Utility.getRandomStrategyVal();
                            }
                            break;
                        case "TIT FOR TAT":
                            if(allRes.length !== 0 && allRes[lastElement].playerLeft.strategy === "TIT FOR TAT"){
                                plLeftVal = allRes[lastElement].playerTop.val === 1 ? 2 : 1; 
                            }else{
                                plLeftVal = Utility.getRandomStrategyVal();
                            }
                            break;
                        case "BEAT LAST":
                            // if(allRes.length !== 0 && allRes[lastElement].playerLeft.strategy === "BEAT LAST"){
                               
                            //     if(allRes[lastElement-8].playerLeft.strategy !== "BEAT LAST" && allRes[lastElement-7].playerLeft.strategy === "BEAT LAST"){
                            //         plLeftVal = allRes[lastStep].playerTop.val === 1 ? 2 : 1; 
                            //         console.log("LAST LEFT", plLeftVal,lastStep)
                            //         debugger
                            //     }else{
                            //         plLeftVal = allRes[lastElement].playerTop.val
                            //         debugger
                            //     }
                            // }else{
                                plLeftVal = Utility.getRandomStrategyVal();
                                console.log("BBB")
                            // }
                            break;
                   }

                   switch(state$.value.business.playerTopStrategyList[0]){
                        case "RANDOM":
                            plTopVal = Utility.getRandomStrategyVal();
                            break;
                        case "A100":
                            plTopVal = 1;
                            break;
                        case "B100":
                            plTopVal = 2;
                            break;
                        case "GREEDY":
                            plLeftVal = 1;
                            break;
                        case "GENEROUS":
                            if(allRes.length !== 0 && allRes[lastElement].playerTop.strategy === "GENEROUS"){
                                plTopVal = allRes[lastElement].playerLeft.val === 1 ? 2 : 1;
                            }else{
                                plTopVal = Utility.getRandomStrategyVal();
                            }
                            break;
                        case "MINIMAX":
                            if(allRes.length !== 0 && allRes[lastElement].playerTop.strategy === "MINIMAX"){
                                plTopVal = allRes[lastElement].playerLeft.val;
                            }else{
                                plTopVal = Utility.getRandomStrategyVal();
                            }
                            break;
                        case "TIT FOR TAT":
                            if(allRes.length !== 0 && allRes[lastElement].playerTop.strategy === "TIT FOR TAT"){
                                plTopVal = allRes[lastElement].playerLeft.val === 1 ? 2 : 1;
                            }else{
                                plTopVal = Utility.getRandomStrategyVal();
                            }
                            break;
                        case "BEAT LAST":
                            
                            // if(allRes.length !== 0 && allRes[lastElement].playerTop.strategy === "BEAT LAST"){
                                
                            //     if(allRes[lastElement-8].playerTop.strategy !== "BEAT LAST" && allRes[lastElement-7].playerTop.strategy === "BEAT LAST"){
                            //         plTopVal = allRes[lastStep].playerLeft.val === 1 ? 2 : 1; 
                            //         console.log("LAST TOP", plTopVal,lastStep)
                            //         debugger
                            //     }else{
                            //         plTopVal = allRes[lastElement].playerLeft.val
                            //         debugger
                            //     }
                            // }else{
                                plTopVal = Utility.getRandomStrategyVal();
                            // }
                            break;
                   }

                   let obj = {
                        playerLeft: {
                            strategy: state$.value.business.playerLeftStrategyList[0],
                            val: plLeftVal
                        },
                        playerTop: {
                            strategy: state$.value.business.playerTopStrategyList[0],
                            val: plTopVal
                        }
                    }
                    console.log(obj)
                    return of(
                        Actions.allRoundsResult(obj)
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_TOURNAMENT))
            )
        })
    )
   
export default gameStartedEpic;
