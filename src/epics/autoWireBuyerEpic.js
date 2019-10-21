import { of, empty } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
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

export const autoWireBuyerEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.AUTO_WIRE_BUYER),
        mergeMap((action) => {
            if(state$.value.business.autoWireBuyerIsOn && state$.value.business.wire === 0){
                return of(
                    Actions.startBuyingWire()
                )
            }else{
                return empty()
            }
        })
    )
        
export default autoWireBuyerEpic;
