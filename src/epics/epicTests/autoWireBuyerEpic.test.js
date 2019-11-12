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

describe('autoWireBuyerEpic', () => {
   it('should (if wire is equal to 0 and autoWireBuyerIsOn set to true) return START_BUYING_WIRE',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.AUTO_WIRE_BUYER
      });
      const state$ = {
        value: {
          business: {
            autoWireBuyerIsOn: true,
            wire: 0
          }
        }
      }
      
      const epic$ = Epic.autoWireBuyerEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.START_BUYING_WIRE }
      ])
    }
  )

  it('should (if wire is not equal to 0 or autoWireBuyerIsOn set to false) return nothing',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.AUTO_WIRE_BUYER
      });
      const state$ = {
        value: {
          business: {
            autoWireBuyerIsOn: true,
            wire: 5
          }
        }
      }
      
      const epic$ = Epic.autoWireBuyerEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([])
    }
  )

  it('should (if wire is not equal to 0 or autoWireBuyerIsOn set to false) return nothing',
    async () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.AUTO_WIRE_BUYER
      });
      const state$ = {
        value: {
          business: {
            autoWireBuyerIsOn: false,
            wire: 0
          }
        }
      }
      
      const epic$ = Epic.autoWireBuyerEpic(action$, state$);
      const array = [];
      let result = await epic$;
      result.subscribe((action) => {
        console.log("RESULTRESULT",action)
      })

      expect(array).toEqual([])
    }
  )
});
