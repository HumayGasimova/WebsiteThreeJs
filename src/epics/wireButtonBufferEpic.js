import { of, interval, empty } from 'rxjs';
import { mergeMap, bufferWhen, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable, Rx, empty } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/bufferWhen';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/operator/delay';
import * as projectsToAdd from '../constants/projectsToAdd';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const wireButtonBufferEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.CLICK_WIRE_BUTTON),
        bufferWhen(()=> interval(400)),
        filter(events => events.length >= 3),
        mergeMap(action => {
            if(state$.value.business.wireBuyerProjectIsShown === false && state$.value.business.wireToAdd === 1500){
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
