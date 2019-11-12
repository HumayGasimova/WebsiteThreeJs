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
* Tests
*/

describe('updateStrategicModelingCurrentListEpic', () => {
  it('should return ADD_PROJECT',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST,
        obj: {a: 3, b: "Paperclip Game"},
        round: 4
      });
      const epic$ = Epic.updateStrategicModelingCurrentListEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
          type: actionTypes.UPDATE_STRATEGIC_MODELING_ROUND,
          round: 4
        }
      ])
    })
});
