import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as actionTypes from '../constants/actionTypes';


function paperclipsGenerateEpic(action$) { 
    
    return action$
        .ofType(actionTypes.MAKE_PAPERCLIP)
    
        .mergeMap(action => {
            return Observable.of(
                {type: actionTypes.UPDATE_FUNDS, value: 1}
            ) 
        })
       
}

export default paperclipsGenerateEpic;
