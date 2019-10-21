import { Observable, Rx, empty } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/bufferWhen';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';
// import 'rxjs/add/operator/delay';
import * as projectsToAdd from '../constants/projectsToAdd';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function wireButtonBufferEpic(action$, state$) {
    return action$
        .ofType(actionTypes.CLICK_WIRE_BUTTON)
        .bufferWhen(()=> Observable.interval(400))
        .filter(events => events.length >= 3)
        .mergeMap(action => {
            if(state$.value.business.wireBuyerProjectIsShown === false && state$.value.business.wireToAdd === 1500){
                return Observable.of(
                    Actions.addProject(projectsToAdd.WireBuyer),
                    Actions.toggleWireBuyerProject()
                )  
            }else{
                return Observable.empty();
            }
                  
        })
        
}

export default wireButtonBufferEpic;
