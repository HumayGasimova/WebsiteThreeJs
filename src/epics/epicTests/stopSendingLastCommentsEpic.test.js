import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as actionTypes from "../../constants/actionTypes";
import { delay, toArray } from 'rxjs/operators';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

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
