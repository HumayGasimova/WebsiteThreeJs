import { ActionsObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';
import * as Epic from './index';
import { addChipEpic }from './addChipEpic'
import * as Actions from "../actions";
import * as actionTypes from "../constants/actionTypes";

describe('addChipEpic', () => {

  it('EPICs',
    async () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_CHIP,
        obj: {
          chipsNumber: 'chipX',
          showChip: false,
        }
      });
      const epic$ = addChipEpic(action$);
      const array =[];
      await epic$.subscribe(
        (action) => array.push(action)
      )
  
      expect(array).toEqual([
        { type: actionTypes.TOGGLE_CHIP,
          val: true,
          chipsNumber: "chipX" }
      ])
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