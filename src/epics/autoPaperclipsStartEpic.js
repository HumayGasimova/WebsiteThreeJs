import { Observable, Rx } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function autoPaperclipsStartsEpic(action$) {
    return action$
        .ofType(actionTypes.AUTO_PAPERCLIPS_START)
        .delay(5000)
        .mergeMap(action => {
            return Observable.of(
                Actions.makePaperclip(action.priceOfPaperclip, action.delay),
                Actions.autoPaperclipsStart()
            )
        })
          
            // .repeat(3)     
}

export default autoPaperclipsStartsEpic;
