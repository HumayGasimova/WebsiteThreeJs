import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

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