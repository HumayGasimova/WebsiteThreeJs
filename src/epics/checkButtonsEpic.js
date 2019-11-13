/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const checkButtonsEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.CHECK_BUTTONS),
        mergeMap(action => {
            return of(
                Actions.toggleWireButton(),
                Actions.toggleMarketingButton(),
                Actions.toggleAutoClippersButton(),
                Actions.toggleMegaClippersButton(),
                Actions.toggleNewTournamentButton()
            )        
        })
    )
        
export default checkButtonsEpic;
