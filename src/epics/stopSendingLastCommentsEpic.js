import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/take';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

export const stopSendingLastCommentsEpic = (action$, state$) => 
  action$.pipe(
    ofType(actionTypes.STOP_SENDING_LAST_COMMENTS),
    mergeMap(action => {
      return of(
        Actions.stopComments()
      ).pipe(
          delay(9000)
      )
    })
  )
      
export default stopSendingLastCommentsEpic;
