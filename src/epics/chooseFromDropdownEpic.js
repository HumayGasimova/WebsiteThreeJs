import { Observable, Rx } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function chooseFromDropdownEpic(action$, state$) {
    return action$
        .ofType(actionTypes.CHOOSE_FROM_DROPDOWN)
        .mergeMap(action => {

            switch(action.chosen){
                case 'Low Risk':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'Med Risk':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'High Risk':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'Pick a Start':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'RANDOM':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'A100':
                return Observable.of(
                         Actions.addChosenFromDropdown(action.chosen, action),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'B100':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'GREEDY':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'GENEROUS':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'MINIMAX':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'TIT FOR TAT':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
                case 'BEAT LAST':
                    return Observable.of(
                        Actions.addChosenFromDropdown(action.chosen, action.index),
                        Actions.closeDropdowns()
                    ) 
                break;
            } 
        })
        
}

export default chooseFromDropdownEpic;
