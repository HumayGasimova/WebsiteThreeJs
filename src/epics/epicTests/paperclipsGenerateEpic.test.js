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

describe('paperclipsGenerateEpic', () => {
  it('should return MAKE_PAPERCLIP',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_SELLING
      });
      const epic$ = Epic.paperclipsGenerateEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.MAKE_PAPERCLIP }
      ])
    }
  )
});
