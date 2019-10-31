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
            allRoundsRes.map((el,i) => {
                let plLeftValue = el.playerLeft.val;
                let plTopValue = el.playerTop.val;
                if(plLeftValue === 1 && plTopValue === 1){
                    allRoundsRes[i].playerLeft.val = el.cell1 / 2;
                    allRoundsRes[i].playerTop.val = el.cell1 / 2;
                }
                if(plLeftValue === 2 && plTopValue === 2){
                    allRoundsRes[i].playerLeft.val = el.cell4 * 2;
                    allRoundsRes[i].playerTop.val = el.cell4 * 2;
                }
                if(plLeftValue === 1 && plTopValue === 2){
                    allRoundsRes[i].playerLeft.val = el.cell3;
                    allRoundsRes[i].playerTop.val = 0;
                }
                if(plLeftValue === 2 && plTopValue === 1){
                    allRoundsRes[i].playerLeft.val = 0;
                    allRoundsRes[i].playerTop.val = el.cell2;
                }
            })
             console.log("YYY", allRoundsRes)
            return of(
                Actions.updatedAllRoundsRes(allRoundsRes),
            )
        }) 
    )

export default startCountingResultEpic;
