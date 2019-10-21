import { Observable, interval } from 'rxjs';
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


export const startMegaClippersEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_MEGACLIPPERS),
        mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    let wire = state$.value.business.wire;

                    if(wire >= state$.value.business.megaClippersToAdd){
                        return Observable.of(
                            Actions.makePaperclip()
                        ).repeat(state$.value.business.megaClippersToAdd)
                    }else{
                        return Observable.of(
                            Actions.makePaperclip()
                        ).repeat(wire)
                    }
                }),
                takeUntil(action$.ofType(actionTypes.STOP))
            )
       })
    )
    
export default startMegaClippersEpic;
