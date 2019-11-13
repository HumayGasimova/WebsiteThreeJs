/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap 
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

export const chooseFromDropdownEpic = (action$) => 
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
                        Actions.stopAddingEmptyInvestmentsLine()
                    ) 
                case 'Med Risk':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns(),
                        Actions.updateInvestmentsDelay(6000,3000),
                        Actions.stopUpdatingScreen(),
                        Actions.stopUpdatingInvestmentLines(),
                        Actions.startUpdatingScreen(),
                        Actions.startUpdatingInvestmentLines(),
                        Actions.stopAddingEmptyInvestmentsLine()
                    ) 
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
                case 'Pick a Start':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    )
                case 'RANDOM':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'A100':
                return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'B100':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    )
                case 'GREEDY':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'GENEROUS':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'MINIMAX':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'TIT FOR TAT':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                case 'BEAT LAST':
                    return of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    )
            } 
        })
    )
    
export default chooseFromDropdownEpic;
