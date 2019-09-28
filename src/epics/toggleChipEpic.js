import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function toggleChipEpic(action$, state$) {
    return action$
        .ofType(actionTypes.TOGGLE_CHIP)
        .mergeMap(action => {
            let chip = state$.value.business.chips.find(x => x.chipsNumber === action.chipsNumber);
            switch(action.chipsNumber){
                case 'chip1':
                   
                    if(chip.showChip){
                        return Observable.of(
                            Actions.toggleChip(false, action.chipsNumber)
                        )
                        .delay(30000)
                    }else{
                        return Observable.of(
                            Actions.toggleChip(true, action.chipsNumber)
                        )
                        .delay(1000)
                    }
            }
        })       
}

export default toggleChipEpic;
