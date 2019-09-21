import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function buyWireEpic (action$, state$) {
    return action$
        .ofType(actionTypes.START_BUYING_WIRE)
        // .withLatestFrom(state$)
        .mergeMap((action) => {
            if(state$.value.business.autoClipperOn){
                return Observable.of(
                    Actions.buyWire(),
                    Actions.toggleWireButton(),
                    Actions.toggleMakePaperclipButton(false),
                    Actions.autoPaperclipsStart(state$.value.business.paperclipPrice, state$.value.business.delay, state$.value.business.delayAutoPaperClippers, state$.value.business.wire)
                )
            }else{
                return Observable.of(
                    Actions.buyWire(),
                    Actions.toggleWireButton(),
                    Actions.toggleMakePaperclipButton(false)
                )
            }
           
        })       
}

export default buyWireEpic;
