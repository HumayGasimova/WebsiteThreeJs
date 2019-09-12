import { Observable, Rx } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function checkButtonsEpic(action$) {
    return action$
        .ofType(actionTypes.CHECK_BUTTONS)
        .mergeMap(action => {
            return Observable.of(
                Actions.toggleWireButton(),
                Actions.toggleMarketingButton(),
                Actions.toggleAutoClippersButton()
            )        
        })
        
}

export default checkButtonsEpic;
