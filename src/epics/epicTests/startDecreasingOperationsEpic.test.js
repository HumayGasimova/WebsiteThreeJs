import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('startDecreasingOperationsEpic', () => {

  it('should return START_DECREASING_OPS',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_DECREASING_OPERATIONS
      });
      const epic$ = Epic.startDecreasingOperationsEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.START_DECREASING_OPS }
      ])
    }
  )
});