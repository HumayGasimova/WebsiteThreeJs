import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable, Rx } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const checkButtonsEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.CHECK_BUTTONS),
        mergeMap(action => {
            return of(
                Actions.toggleWireButton(),
                Actions.toggleMarketingButton(),
                Actions.toggleAutoClippersButton(),
                Actions.toggleMegaClippersButton(),
                Actions.toggleNewTournamentButton(),
            )        
        })
    )
        
export default checkButtonsEpic;
