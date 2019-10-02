import { Observable, Rx } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { bufferCount } from 'rxjs/operators';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function wireButtonBufferEpic(action$) {
    return action$
        .ofType(actionTypes.CLICK_WIRE_BUTTON)
        .bufferCount(3)
        .mergeMap(action => {
            console.log("HEY")
            return Observable.of(
         
            )        
        })
        
}

export default wireButtonBufferEpic;
