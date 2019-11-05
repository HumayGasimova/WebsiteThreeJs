import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('checkAutoAndMegaClippersIsOnEpic', () => {

  it('should return SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS',
    () => {
    //   const action$ = ActionsObservable.of({
    //     type: actionTypes.STOP
    //   });
    //   const epic$ = Epic.checkAutoAndMegaClippersIsOnEpic(action$);
    //   const array = [];
    //   epic$.subscribe(
    //     (action) => array.push(action)
    //   )

    //   expect(array).toEqual([
    //     {
    //         type: actionTypes.SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS,
    //         val: false
    //     }
    //   ])
    }
  )
});