import { Observable, Rx } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function checkWireEpic(action$, state$) {
    return action$
        .ofType(actionTypes.CHECK_EXISTENCE_OF_WIRE)
        .mergeMap(action => {
            if(state$.value.business.wire === 0 ){
                return Observable.of(
                    Actions.stop(),
                    Actions.wireExists(false)
                ) 
            }else{
                return Observable.of(
                    // Actions.toggleWireButton(),
                    Actions.wireExists(true),
                    // Actions.autoPaperclipsStart()
                ) 
            }
                  
        })
        
}

export default checkWireEpic;
