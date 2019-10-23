import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('buyWireEpic', () => {

  it('should return BUY_WIRE, TOGGLE_WIRE_BUTTON, TOGGLE_MAKE_PAPERCLIP_BUTTON',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.START_BUYING_WIRE
      });
      const epic$ = Epic.buyWireEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { type: actionTypes.BUY_WIRE },
        { type: actionTypes.TOGGLE_WIRE_BUTTON },
        {
            type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
            val: false
        }
      ])
    }
  )
});