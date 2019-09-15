import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { take } from 'rxjs-compat/operator/take';

export const autoPaperclipsStartsEpic = action$ => 
    action$
    .ofType(actionTypes.AUTO_PAPERCLIPS_START)

    .mergeMap(action => {
            return interval(action.delayAutoPaperClippers).pipe(
                mergeMap(() => Observable.of(
                    Actions.makePaperclip(action.priceOfPaperclip, action.delay, action.wire)
                    )),
                takeUntil(action$.ofType(actionTypes.STOP)),
            )
        
    })
    
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

export default autoPaperclipsStartsEpic;
