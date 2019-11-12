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

describe('addChipEpic', () => {

  it('should return TOGGLE_CHIP',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_CHIP,
        obj: {
          chipsNumber: 'chipX',
          showChip: false,
        }
      });
      const epic$ = Epic.addChipEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )
  
      expect(array).toEqual([
        { 
          type: actionTypes.TOGGLE_CHIP,
          val: true,
          chipsNumber: "chipX" 
        }
      ])
    }
  )
});
