import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as actionTypes from "../../constants/actionTypes";
import { delay } from 'rxjs/operators';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

describe('decreaseOpsEpic', () => {

  it('should return DECREASE_OPS after 10 ms',
    () => {
      const spy = jest.fn();
      const action$ = ActionsObservable.of({
        type: actionTypes.START_DECREASING_OPS
      });

      const state$ = {
          value: {
              business: {
                ops: 7,
                opsMax: 4
              }
          }
      }

      Epic.decreaseOpsEpic(action$, state$).subscribe(spy);

      expect(delay).toHaveBeenCalledWith(10);  
      expect(spy).toHaveBeenCalledWith(
        
        { type: actionTypes.DECREASE_OPS }
      );  
      expect(spy).toHaveBeenCalledTimes(3);  
    }
  )
});