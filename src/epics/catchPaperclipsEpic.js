import { Observable, interval } from 'rxjs';
// import { interval } from 'rxjs/observable';
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

export const catchPaperclipsEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.MAKE_PAPERCLIP),
        bufferWhen(()=> interval(1000)),
        mergeMap(events => {
            let paperclipsPerSec = events.length
            return Observable.of(
                Actions.updateClipsPerSec(paperclipsPerSec)
            ) 
        })
    )

export default catchPaperclipsEpic;
