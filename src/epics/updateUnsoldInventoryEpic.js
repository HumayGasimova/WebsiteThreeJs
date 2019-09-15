import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

function updateUnsoldInventoryEpic(action$) { 
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
        .mergeMap(action => {
            if(action.wire > 1){
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
            
        })
}

export default updateUnsoldInventoryEpic;
