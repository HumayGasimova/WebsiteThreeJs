import { ActionsObservable } from 'redux-observable';
import { take } from 'rxjs/operators';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import { TestScheduler } from 'rxjs/testing';
import { delay } from 'rxjs/operators';

const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
});

jest.mock('rxjs/operators', (scheduler) => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s,scheduler) => s);  // <= mock delay
  return operators;
});

const injectTimeBasedOperators = (scheduler) => {
    const originalDelay = Observable.prototype.delay;
    function stubDelay(dueTime) {
      return originalDelay.call(this, dueTime, scheduler);
    }
    spyOn(Observable.prototype, 'delay').and.callFake(stubDelay);
  };

describe('autoPaperclipsStartEpic', () => {

  it('should return a SEND_COMMENT_TO_TERMINAL after each 1500 ms',
    () => {
    //     const spy = jest.fn();
        

    //     const action$ = ActionsObservable.of({
    //       type: actionTypes.LAST_COMMENTS
    //     });

    //     const state$ = {
    //         value: {
    //             business: {
    //                 lastComments: ["Paperclip", "Game", "Ended"]
    //             }
    //         }
    //     }

    // //    Epic.tournamentDurationEpic(action$, state$).subscribe(spy);
    // //   expect(delay).toHaveBeenCalledWith(500); 

    //     scheduler.run(helpers => {
    //         const {expectObservable} = helpers;
    //         const expectedMarble = '1500ms a 1499ms b 1499ms (c|)';
    //         const expectedValues = {
    //             a: { 
    //                 type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //                 comment: "Paperclip"
    //             }, 
    //             b: {  
    //                 type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //                 comment: "Game" 
    //             }, 
    //             c: {  
    //                 type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //                 comment: "Ended" 
    //             }
    //         };
       
    //         expectObservable(Epic.tournamentDurationEpic(action$, state$).pipe(take(3))).toBe(expectedMarble, expectedValues);
      
    //     })
    //     injectTimeBasedOperators(scheduler);
    //     expect(spy).toHaveBeenNthCalledWith(1, { 
    //         type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //         comment: "Paperclip"
    //     });  
    //     expect(spy).toHaveBeenNthCalledWith(2, { 
    //         type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //         comment: "Game" 
    //     });  
    //     expect(spy).toHaveBeenNthCalledWith(3, { 
    //         type: actionTypes.SEND_COMMENT_TO_TERMINAL,
    //         comment: "Ended"
    //     });  
    //     expect(spy).toHaveBeenCalledTimes(3);  
        }
    )

});