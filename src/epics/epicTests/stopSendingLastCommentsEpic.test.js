/**
* Libraries
*/

import { 
    ActionsObservable 
} from 'redux-observable';

/**
* Epic
*/

import * as Epic from '../index';

/**
* Constants
*/

import * as actionTypes from "../../constants/actionTypes";

/**
* Operators
*/

import { 
    delay 
} from 'rxjs/operators';

/**
* Test setup
*/

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

/**
* Tests
*/

describe('stopSendingLastCommentsEpic', () => {
    it('should return STOP_COMMENTS in a given delay',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.STOP_SENDING_LAST_COMMENTS
            });

            Epic.stopSendingLastCommentsEpic(action$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(9000);  
            expect(spy).toHaveBeenNthCalledWith(1, { type: actionTypes.STOP_COMMENTS }
            );  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        }
    )
});
