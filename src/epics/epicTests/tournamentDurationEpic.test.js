import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as actionTypes from "../../constants/actionTypes";
import { delay } from 'rxjs/operators';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

describe('tournamentDurationEpic', () => {

  it('should return SHOW_ROUND_AND_PLAYERS, SHOW_ROUND_AND_PLAYERS, TOURNAMENT_STATE, TOGGLE_CELLS after 3000 ms',
    () => {
      const spy = jest.fn();
      const action$ = ActionsObservable.of({
        type: actionTypes.TOURNAMENT_DURATION
      });

      const state$ = {
          value: {
              business: {
                strategicModelingRound: 3
              }
          }
      }

      Epic.tournamentDurationEpic(action$, state$).subscribe(spy);

      expect(delay).toHaveBeenCalledWith(3000);  
      expect(spy).toHaveBeenNthCalledWith(1, { type: actionTypes.STOP_TOURNAMENT });  
      expect(spy).toHaveBeenNthCalledWith(2, { type: actionTypes.SHOW_ROUND_AND_PLAYERS, val: false });  
      expect(spy).toHaveBeenNthCalledWith(3, { type: actionTypes.TOURNAMENT_STATE, val: false });  
      expect(spy).toHaveBeenNthCalledWith(4, { type: actionTypes.TOGGLE_CELLS, obj: { valLeft: 3, valTop: 3}});    
      expect(spy).toHaveBeenCalledTimes(4);  
    }
  )
});