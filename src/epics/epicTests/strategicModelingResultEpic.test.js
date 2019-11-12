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

describe('strategicModelingResultEpic', () => {
  it('should return START_COUNTING_RESULT after 3001 ms',
    () => {
      const spy = jest.fn();
      const action$ = ActionsObservable.of({
        type: actionTypes.STRATEGIC_MODELING_RESULT
      });

      const state$ = {
        value: {
          business: {
            strategicModelingRound: 3
          }
        }
      }

      Epic.strategicModelingResultEpic(action$, state$).subscribe(spy);

      expect(delay).toHaveBeenCalledWith(3001); 
      expect(spy).toHaveBeenCalledWith({ type: actionTypes.START_COUNTING_RESULT });   
      expect(spy).toHaveBeenNthCalledWith(1, { type: actionTypes.START_COUNTING_RESULT }); 
      expect(spy).toHaveBeenCalledTimes(1);  
    }
  )
});
