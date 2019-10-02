import { Observable, Rx, pipe } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import { delay } from 'rxjs/operators';

function wireButtonBufferEpic(action$) {
    return action$
        .ofType(actionTypes.CLICK_WIRE_BUTTON)
        .bufferWhen(()=> Observable.interval(700))
        .filter(events => events.length >= 3)
        .mergeMap(action => {
            console.log("HEY")
            return Observable.of(
         
            )        
        })
        
}

export default wireButtonBufferEpic;
