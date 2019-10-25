import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('catchPaperclipsEpic', () => {

  it('should return UPDATE_CLIPS_PER_SEC with value equals to the number of arguments of .of',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.MAKE_PAPERCLIP
      },
      {
        type: actionTypes.MAKE_PAPERCLIP
      },
      {
        type: actionTypes.MAKE_PAPERCLIP
      });
      const epic$ = Epic.catchPaperclipsEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.UPDATE_CLIPS_PER_SEC,
            val: 3
        }
      ])
    }
  )
});