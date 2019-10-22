import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import * as Epic from './index';
import * as Actions from "../actions";
import * as actionTypes from "../constants/actionTypes";

describe('addChipEpic', () => {
    it('dispatches actions to toggleChip', () => {
      const action$ = of(Actions.addChip({a:4,b:5}));
      const expectedOutputActions = [
            {type: "IS_SAVING"},
            {type: "SAVING_ERROR", error: 'save failed'},
      ];
      Epic.addChipEpic(action$, {}).pipe(
        toArray()
      )
      .subscribe((outputActions) => {
        console.log(outputActions)
        expect(outputActions).toEqual(expectedOutputActions);
      })
       
    });
});