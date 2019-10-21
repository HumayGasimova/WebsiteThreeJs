import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const toggleChipEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.TOGGLE_CHIP),
        mergeMap(action => {
            let chip = state$.value.business.chips.find(x => x.chipsNumber === action.chipsNumber);
            // debugger
            switch(action.chipsNumber){
                case 'chip1':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip2':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip3':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip4':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip5':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip6':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip7':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip8':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip9':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
                case 'chip10':
                    if(chip.showChip){
                        return of(
                            Actions.toggleChip(false, action.chipsNumber)
                        ).pipe(
                            delay(120000)
                        )
                    }else{
                        return of(
                            Actions.toggleChip(true, action.chipsNumber)
                        ).pipe(
                            delay(1000)
                        )
                    }
            }
        })
    )
       

export default toggleChipEpic;
