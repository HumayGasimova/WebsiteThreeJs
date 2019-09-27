import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function startCountingQOpsEpic(action$, state$) {
    return action$
        .ofType(actionTypes.START_COUNTING_Q_OPS)
        .mergeMap(action => {
            return interval(1000).pipe(
                mergeMap(() => {
                    // if(state$.values.business.qOps > -360 && state$.values.business.qOps < 360){
                    //     Observable.of(
                    //         // Actions.makePaperclip(action.priceOfPaperclip, action.delay, action.wire)
                    //     )
                    // }
                })
        })       
}

export default startCountingQOpsEpic;
