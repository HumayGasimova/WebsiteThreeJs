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

describe('autoPaperClippersAddOneEpic', () => {
  it('should return AUTO_CLIPPERS_ADD_ONE, AUTO_PAPERCLIPS_START, SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.AUTO_PAPERCLIPS
      });
      const epic$ = Epic.autoPaperClippersAddOneEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.AUTO_CLIPPERS_ADD_ONE },
        { type: actionTypes.AUTO_PAPERCLIPS_START },
        {
          type: actionTypes.SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS,
          val: true
        }
      ])
    }
  )
});
