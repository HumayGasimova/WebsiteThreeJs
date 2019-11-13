/**
* Operators
*/

import { 
    of, 
    interval, 
    empty 
} from 'rxjs';

import { 
    mergeMap, 
    bufferWhen, 
    filter 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as projectsToAdd from '../constants/projectsToAdd';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const wireButtonBufferEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.CLICK_WIRE_BUTTON),
        bufferWhen(()=> interval(400)),
        filter(events => events.length >= 3),
        mergeMap(action => {
            if(state$.value.business.wireBuyerProjectIsShown === false && state$.value.business.wireToAdd >= 1500){
                return of(
                    Actions.addProject(projectsToAdd.WireBuyer),
                    Actions.toggleWireBuyerProject()
                )  
            }else{
                return empty();
            }        
        })
    )

export default wireButtonBufferEpic;
