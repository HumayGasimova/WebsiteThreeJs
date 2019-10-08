import { Observable, Rx, empty } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';
import * as projectsToAdd from '../constants/projectsToAdd';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function catchPaperclipsEpic(action$, state$) {
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
        .bufferWhen(()=> Observable.interval(1000))
        .mergeMap(events => {
            let paperclipsPerSec = events.length
            return Observable.of(
                Actions.updateClipsPerSec(paperclipsPerSec)
            ) 
        })
}

export default catchPaperclipsEpic;
