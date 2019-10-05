import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function updateUnsoldInventoryEpic(action$, state$) { 
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
        .mergeMap(action => {
            if(state$.value.business.paperClips === state$.value.business.clipsToBuyTrust){
                if(state$.value.business.wire >= 1){
                    return Observable.of(
                        Actions.updateUnsoldInventory(),
                        Actions.updateFunds(action.priceOfPaperclip),
                        Actions.setAutoClipperInitPrice(),
                        Actions.toggleMarketingButton(),
                        Actions.toggleWireButton(),
                        Actions.toggleAutoClippersButton(),
                        Actions.trustPlusOne(),
                        Actions.sendCommentToTerminal('Production target met: TRUST INCREASED, additional processor/memory capacity granted')
                    ) 
                    .delay(action.delay)
                }else{
                    return Observable.of(
                        Actions.toggleMakePaperclipButton(true)
                    ) 
                }
            }else{
                if(state$.value.business.wire >= 1){
                    return Observable.of(
                        Actions.updateUnsoldInventory(),
                        Actions.updateFunds(action.priceOfPaperclip),
                        Actions.setAutoClipperInitPrice(),
                        Actions.toggleMarketingButton(),
                        Actions.toggleWireButton(),
                        Actions.toggleAutoClippersButton(),
                        Actions.trustPlusOne()
                    ) 
                    .delay(action.delay)
                }else{
                    return Observable.of(
                        Actions.toggleMakePaperclipButton(true)
                    ) 
                }
            }
      
            
        })
}

export default updateUnsoldInventoryEpic;
