import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('checkButtonsEpic', () => {

  it('should return TOGGLE_WIRE_BUTTON, TOGGLE_MARKETING_BUTTON, TOGGLE_AUTO_CLIPPERS_BUTTON, TOGGLE_MEGA_CLIPPERS_BUTTON',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.CHECK_BUTTONS
      });
      const epic$ = Epic.checkButtonsEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.TOGGLE_WIRE_BUTTON },
        { type: actionTypes.TOGGLE_MARKETING_BUTTON },
        { type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON },
        { type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON }
      ])
    }
  )
});