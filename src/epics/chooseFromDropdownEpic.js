import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable, Rx } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const chooseFromDropdownEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.CHOOSE_FROM_DROPDOWN),
        mergeMap(action => {

            switch(action.chosen){
                case 'Low Risk':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns(),
                        Actions.updateInvestmentsDelay(10000,5000),
                        Actions.stopUpdatingScreen(),
                        Actions.stopUpdatingInvestmentLines(),
                        Actions.startUpdatingScreen(),
                        Actions.startUpdatingInvestmentLines(),
                        Actions.stopAddingEmptyInvestmentsLine(),

                    ) 
                break;
                case 'Med Risk':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns(),
                        Actions.updateInvestmentsDelay(6000,3000),
                        Actions.stopUpdatingScreen(),
                        Actions.stopUpdatingInvestmentLines(),
                        Actions.startUpdatingScreen(),
                        Actions.startUpdatingInvestmentLines(),
                        Actions.stopAddingEmptyInvestmentsLine(),
                    ) 
                break;
                case 'High Risk':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns(),
                        Actions.updateInvestmentsDelay(5000,2000),
                        Actions.stopUpdatingScreen(),
                        Actions.stopUpdatingInvestmentLines(),
                        Actions.startUpdatingScreen(),
                        Actions.startUpdatingInvestmentLines(),
                        Actions.startAddingEmptyInvestmentsLine()
                    ) 
                break;
                case 'Pick a Start':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'RANDOM':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'A100':
                return of(
                         Actions.addChosenFromDropdown(action.chosen, action),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'B100':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'GREEDY':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'GENEROUS':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'MINIMAX':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'TIT FOR TAT':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'BEAT LAST':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
            } 
        })
    )
       
        


export default chooseFromDropdownEpic;
