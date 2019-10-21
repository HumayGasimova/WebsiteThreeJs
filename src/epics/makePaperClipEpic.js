import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const makePaperClipEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.MAKE_PAPERCLIP),
        mergeMap(action => {
            if(state$.value.business.paperClips === state$.value.business.clipsToBuyTrust){
                if(state$.value.business.wire >= 1){
                    return Observable.of(
                        Actions.setAutoClipperInitPrice(),
                        Actions.toggleMarketingButton(),
                        Actions.toggleWireButton(),
                        Actions.toggleAutoClippersButton(),
                        Actions.toggleMegaClippersButton(),
                        Actions.trustPlusOne(),
                        Actions.sendCommentToTerminal('Production target met: TRUST INCREASED, additional processor/memory capacity granted')
                    ) 
                    .delay(state$.value.business.delay)
                }else{
                    return Observable.of(
                        Actions.toggleMakePaperclipButton(true)
                    ) 
                }
            }else{
                if(state$.value.business.wire >= 1){
                    return Observable.of(
                        Actions.setAutoClipperInitPrice(),
                        Actions.toggleMarketingButton(),
                        Actions.toggleWireButton(),
                        Actions.toggleAutoClippersButton(),
                        Actions.toggleMegaClippersButton(),
                        Actions.trustPlusOne()
                    ) 
                    .delay(state$.value.business.delay)
                }else{
                    return Observable.of(
                        Actions.toggleMakePaperclipButton(true)
                    ) 
                }
            }
        })
    )
        


export default makePaperClipEpic;
