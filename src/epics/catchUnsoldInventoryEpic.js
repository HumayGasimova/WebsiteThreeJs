import { Observable, interval } from 'rxjs';
import { mergeMap, bufferWhen } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable, Rx, empty } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/bufferWhen';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/empty';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const catchUnsoldInventoryEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.UPDATE_UNSOLD_INVENTORY),
        bufferWhen(()=> interval(1000)),
        mergeMap(events => {
            let unsoldInventoryEvents = events.length;
            let currentPaperclipPrice = state$.value.business.paperclipPrice;
            let avgRevPerSec = unsoldInventoryEvents * currentPaperclipPrice;

            return Observable.of(
                Actions.updateAvgRevPerSec(avgRevPerSec),
                Actions.updateAvgClipsSoldPerSec(unsoldInventoryEvents),
            ) 
        })
    )
    
export default catchUnsoldInventoryEpic;
