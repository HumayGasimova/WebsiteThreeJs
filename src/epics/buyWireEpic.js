import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/withLatestFrom';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const buyWireEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_BUYING_WIRE),
        mergeMap((action) => {
            // if(state$.value.business.autoClipperOn){
                return Observable.of(
                    Actions.buyWire(),
                    Actions.toggleWireButton(),
                    Actions.toggleMakePaperclipButton(false),
                    // Actions.autoPaperclipsStart()
                )
            // }else{
            //     return Observable.of(
            //         Actions.buyWire(),
            //         Actions.toggleWireButton(),
            //         Actions.toggleMakePaperclipButton(false)
            //     )
            // }
           
        })  
    )

export default buyWireEpic;
