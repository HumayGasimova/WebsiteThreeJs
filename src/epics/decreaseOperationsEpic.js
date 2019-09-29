import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
import { interval } from "rxjs"

function decreaseOperationsEpic(action$, state$) { 
        return action$
            .ofType(actionTypes.START_DECREASING_OPERATIONS)
            .switchMap(action => {
                return Observable.of(
                            Actions.decreaseOps()
                        )
                    .delay(10)
                    .repeat(state$.value.business.captureNumber)
                
                    // takeUntil(action$.ofType(actionTypes.STOP_DECREASING_OPERATIONS))
            })
            .delay(4000)
    }

// function decreaseOperationsEpic(action$, state$) { 
//     return action$
//         .ofType(actionTypes.START_DECREASING_OPERATIONS)
//         // .take(1)
//         .switchMap(action => {
//             return interval(100).pipe(
//                 mergeMap(() => Observable.of(
//                             Actions.decreaseOps()
//                         )
//                  .repeat(action.captureNumber)
//                 ),
//                 // takeUntil(action$.ofType(actionTypes.STOP_DECREASING_OPERATIONS))
//             )
//         })
//          .delay(4000)
// }

export default decreaseOperationsEpic;
