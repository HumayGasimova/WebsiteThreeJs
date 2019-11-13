/**
* Operators
*/

import { 
  of 
} from 'rxjs';

import { 
  mergeMap, 
  delay 
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

export const stopSendingLastCommentsEpic = (action$) => 
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
