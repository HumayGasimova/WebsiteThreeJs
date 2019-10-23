import { ActionsObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import * as Epic from './index';
import * as Actions from "../actions";
import * as actionTypes from "../constants/actionTypes";

describe('Epics', () => {

  it('addChipEpic',
    async () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_CHIP,
        obj: {
          chipsNumber: 'chipX',
          showChip: false,
        }
      });
      const epic$ = Epic.addChipEpic(action$);
      const array = [];
      await epic$.subscribe(
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

  it('autoPaperClippersAddOneEpic',
    async () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.AUTO_PAPERCLIPS
      });
      const epic$ = Epic.autoPaperClippersAddOneEpic(action$);
      const array = [];
      await epic$.subscribe(
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

  // it('autoPaperclipsStartEpic',
  //   async () => {
  //     const action$ = ActionsObservable.of({
  //       type: actionTypes.AUTO_PAPERCLIPS_START
  //     });
  //     const state$ = {
  //       value: {
  //         business: {
  //           delayAutoPaperClippers: 1000
  //         }
  //       }
  //     }
      
  //     const epic$ = Epic.autoPaperclipsStartEpic(action$, state$);
  //     const array = [];
  //     await epic$.subscribe(
  //       (action) => {
  //         console.log("ACTIONS", action)
  //       }
  //     )

  //     expect(array).toEqual([
  //       { type: actionTypes.MAKE_PAPERCLIP }
  //     ])
  //   }
  // )

   it('autoWireBuyerEpic (if wire is equal to 0 and autoWireBuyerIsOn set to true)',
    async () => {
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
      await epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.START_BUYING_WIRE }
      ])
    }
  )

  it('autoWireBuyerEpic (if wire is not equal to 0 or autoWireBuyerIsOn set to false)',
    async () => {
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
      await epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([])
    }
  )

  it('autoWireBuyerEpic (if wire is not equal to 0 or autoWireBuyerIsOn set to false)',
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
      await epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([])
    }
  )
  
    // it('dispatches actions to toggleChip', (done) => {
    //   const action$ = ActionsObservable.of(Actions.addChip({a:4,b:5}));
    //   const expectedOutputActions = [
    //         {type: "IS_SAVING"},
    //         {type: "SAVING_ERROR", error: 'save failed'},
    //   ];

    //   Epic.addChipEpic(action$, {})
    //   .toArray()
    //   .subscribe((outputActions) => {
    //     console.log(outputActions)
    //     expect(outputActions).toEqual(expectedOutputActions);
    //   })
    //   done();
       
    // });
});