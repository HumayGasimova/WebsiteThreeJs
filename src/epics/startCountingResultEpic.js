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

export const startCountingResultEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_COUNTING_RESULT),
        mergeMap(action => {
            let allRoundsRes = [...state$.value.business.allRoundsRes];
            let updatedArray = []
            allRoundsRes.map((el,i) => {
                let plLeftValue = el.playerLeft.val;
                let plTopValue = el.playerTop.val;
                let newValuePlLeft;
                let newValuePlTop;
                
                if(plLeftValue === 1 && plTopValue === 1){
                    newValuePlLeft = el.cell1 / 2;
                    newValuePlTop = el.cell1 / 2;
                }
                if(plLeftValue === 2 && plTopValue === 2){
                    newValuePlLeft = el.cell4 * 2;
                    newValuePlTop = el.cell4 * 2;
                }
                if(plLeftValue === 1 && plTopValue === 2){
                    newValuePlLeft = el.cell3;
                    newValuePlTop = 0;
                }
                if(plLeftValue === 2 && plTopValue === 1){
                    newValuePlLeft = 0;
                    newValuePlTop = el.cell2;
                }

                updatedArray.push({
                    playerLeft: {
                        strategy: el.playerLeft.strategy,
                        value: newValuePlLeft
                    },
                    playerTop: {
                        strategy: el.playerTop.strategy,
                        value: newValuePlTop
                    }
                })
            })
             console.log("YYY", updatedArray)
            return of(
                Actions.updatedAllRoundsRes(updatedArray),
                Actions.countFinalResultOfEachStrategy(),
            )
        }) 
    )

export default startCountingResultEpic;
