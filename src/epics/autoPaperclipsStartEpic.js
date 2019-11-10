import { of, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const autoPaperclipsStartEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.AUTO_PAPERCLIPS_START),
        mergeMap(action => {
            return interval(state$.value.business.delayAutoPaperClippers).pipe(
                mergeMap(() => {
                    return of(
                                    Actions.makePaperclip()
                                )   
                }
                // of(
                //             Actions.makePaperclip()
                //         )   
                        // .delay(1000)
                        // .repeat(state$.value.business.autoClippersPerSec)
                ),
                takeUntil(action$.ofType(actionTypes.STOP))
            )
       })
    )
    


   
    // .mergeMap(action => {
    //     if(state$.value.business.autoClippersPerSec > 60){
    //         return interval(1000).pipe(
    //             mergeMap(() => Observable.of(
    //                         Actions.makePaperclip()
    //                     )   
                        
    //                     .repeat(state$.value.business.autoClippersPerSec)
    //                     // .delay(500)
    //             ),
    //             takeUntil(action$.ofType(actionTypes.STOP))
    //         )
    //     }else{
    //         return interval(state$.value.business.delayAutoPaperClippers).pipe(
    //             mergeMap(() => Observable.of(
    //                         Actions.makePaperclip()
    //                     )   
    //                     // .delay(1000)
    //                     // .repeat(state$.value.business.autoClippersPerSec)
    //             ),
    //             takeUntil(action$.ofType(actionTypes.STOP))
    //         )
    //     }
    //  })
     


   
    // return action$
    //     .ofType(actionTypes.AUTO_PAPERCLIPS_START)
    //     .mergeMap(action => {

    //         // if(action.wire > 1){
    //         // return Observable.of(
    //         //     Actions.makePaperclip(action.priceOfPaperclip, action.delay, action.wire),
    //         //     Actions.repeatAutoPaperClippers(action.priceOfPaperclip, action.delay, action.delayAutoPaperClippers, action.wire)
    //         // )     
    //         // }else{
    //         //     return Observable.of(
    //         //         Actions.toggleMakePaperclipButton(true)
    //         //     ) 
    //         // }  

    //     })

export default autoPaperclipsStartEpic;
