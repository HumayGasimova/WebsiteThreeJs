/**
* Operators
*/

import { 
    of, 
    interval 
} from 'rxjs';

import { 
    mergeMap, 
    takeUntil 
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
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startUpdatingInvestmentLinesEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_INVESTMENTS_LINE),
        mergeMap(action => {
            return interval(state$.value.business.delayUpdatingInvLines).pipe(
                mergeMap(() => {
                    let investmentsLines = [...state$.value.business.investmentsLines];
    
                    let randomPrice1 = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomPrice2 = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomPrice3 = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomPrice4 = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomPrice5 = Utility.getRandomPrice(state$.value.business.investmentsLevel);
                    let randomProfitLoss1 = Utility.getRandomProfitLoss();
                    let randomProfitLoss2 = Utility.getRandomProfitLoss();
                    let randomProfitLoss3 = Utility.getRandomProfitLoss();
                    let randomProfitLoss4 = Utility.getRandomProfitLoss();
                    let randomProfitLoss5 = Utility.getRandomProfitLoss();
                   
                    investmentsLines.map((x,i)=>{
                        if(x !== ""){
                            switch (i){
                                case 0: 
                                    investmentsLines[i] = {
                                        stock: investmentsLines[i].stock,
                                        amt: investmentsLines[i].amt,
                                        price: randomPrice1,
                                        total: investmentsLines[i].amt * randomPrice1,
                                        profitLoss: investmentsLines[i].amt * randomProfitLoss1
                                    }
                                    break;
                                case 1: 
                                    investmentsLines[i] = {
                                        stock: investmentsLines[i].stock,
                                        amt: investmentsLines[i].amt,
                                        price: randomPrice2,
                                        total: investmentsLines[i].amt * randomPrice2,
                                        profitLoss: investmentsLines[i].amt * randomProfitLoss2
                                    }
                                    break;
                                case 2: 
                                    investmentsLines[i] = {
                                        stock: investmentsLines[i].stock,
                                        amt: investmentsLines[i].amt,
                                        price: randomPrice3,
                                        total: investmentsLines[i].amt * randomPrice3,
                                        profitLoss: investmentsLines[i].amt * randomProfitLoss3
                                    }
                                    break;
                                case 3: 
                                    investmentsLines[i] = {
                                        stock: investmentsLines[i].stock,
                                        amt: investmentsLines[i].amt,
                                        price: randomPrice4,
                                        total: investmentsLines[i].amt * randomPrice4,
                                        profitLoss: investmentsLines[i].amt * randomProfitLoss4
                                    }
                                break;
                                case 4: 
                                    investmentsLines[i] = {
                                        stock: investmentsLines[i].stock,
                                        amt: investmentsLines[i].amt,
                                        price: randomPrice5,
                                        total: investmentsLines[i].amt * randomPrice5,
                                        profitLoss: investmentsLines[i].amt * randomProfitLoss5
                                    }
                                break;
                            }
                        }
                    })
                   
                    return of(
                        Actions.updateInvestmentsLines(investmentsLines)
                    )   
                }),
                takeUntil(action$.ofType(actionTypes.STOP_UPDATING_INVESTMENTS_LINE))
            )
        })
    )
  

export default startUpdatingInvestmentLinesEpic;
