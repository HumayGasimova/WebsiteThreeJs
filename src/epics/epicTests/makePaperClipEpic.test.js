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
* Operators
*/

import { 
  delay 
} from 'rxjs/operators';

/**
* Test setup
*/

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

/**
* Tests
*/

describe('makePaperClipEpic', () => {
  it('should (if paperClips is equal to clipsToBuyTrust and wire is greater than or equal to 1) return SET_AUTO_CLIPPER_INIT_PRICE, TOGGLE_MARKETING_BUTTON, TOGGLE_WIRE_BUTTON, TOGGLE_AUTO_CLIPPERS_BUTTON, TOGGLE_MEGA_CLIPPERS_BUTTON, TRUST_PLUS_ONE, SEND_COMMENT_TO_TERMINAL in a given delay',
    () => {
      const spy = jest.fn();
      const action$ = ActionsObservable.of({
        type: actionTypes.MAKE_PAPERCLIP
      });

      const state$ = {
        value: {
          business: {
            paperClips: 1000,
            clipsToBuyTrust: 1000,
            wire: 37,
            delay: 1000
          }
        }
      }

      Epic.makePaperClipEpic(action$, state$).subscribe(spy);

      expect(delay).toHaveBeenCalledWith(1000);  
      expect(spy).toHaveBeenNthCalledWith(1, { type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE }
      );  
      expect(spy).toHaveBeenNthCalledWith(2, { type: actionTypes.TOGGLE_MARKETING_BUTTON });

      expect(spy).toHaveBeenNthCalledWith(3, { type: actionTypes.TOGGLE_WIRE_BUTTON });

      expect(spy).toHaveBeenNthCalledWith(4, { type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON });

      expect(spy).toHaveBeenNthCalledWith(5, { type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON });

      expect(spy).toHaveBeenNthCalledWith(6, { type: actionTypes.TRUST_PLUS_ONE });

      expect(spy).toHaveBeenNthCalledWith(7,
        { 
            type: actionTypes.SEND_COMMENT_TO_TERMINAL,
            comment: "Production target met: TRUST INCREASED, additional processor/memory capacity granted"
        }
      );

      expect(spy).toHaveBeenCalledTimes(7); 
    }
  )

  it('should (if paperClips is equal to clipsToBuyTrust and wire is less than 1) return TOGGLE_MAKE_PAPERCLIP_BUTTON',
    () => {
      const action$ = ActionsObservable.of({
          type: actionTypes.MAKE_PAPERCLIP
        });
      const state$ = {
          value: {
              business: {
                  paperClips: 1000,
                  clipsToBuyTrust: 1000,
                  wire: 0
              }
          }
      }
      const epic$ = Epic.makePaperClipEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )
  
      expect(array).toEqual([
        { 
          type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
          val: true
        }
      ])
    })

    it('should (if paperClips is not equal to clipsToBuyTrust and wire is greater than or equal to 1) return SET_AUTO_CLIPPER_INIT_PRICE, TOGGLE_MARKETING_BUTTON, TOGGLE_WIRE_BUTTON, TOGGLE_AUTO_CLIPPERS_BUTTON, TOGGLE_MEGA_CLIPPERS_BUTTON, TRUST_PLUS_ONE in a given delay',
      () => {
        const spy = jest.fn();
        const action$ = ActionsObservable.of({
          type: actionTypes.MAKE_PAPERCLIP
        });

        const state$ = {
            value: {
                business: {
                  paperClips: 737,
                  clipsToBuyTrust: 1000,
                  wire: 37,
                  delay: 700
                }
            }
        }

        Epic.makePaperClipEpic(action$, state$).subscribe(spy);

        expect(delay).toHaveBeenCalledWith(700);  
        expect(spy).toHaveBeenNthCalledWith(1, { type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE }
        );  
        expect(spy).toHaveBeenNthCalledWith(2, { type: actionTypes.TOGGLE_MARKETING_BUTTON });

        expect(spy).toHaveBeenNthCalledWith(3, { type: actionTypes.TOGGLE_WIRE_BUTTON });

        expect(spy).toHaveBeenNthCalledWith(4, { type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON });

        expect(spy).toHaveBeenNthCalledWith(5, { type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON });

        expect(spy).toHaveBeenNthCalledWith(6, { type: actionTypes.TRUST_PLUS_ONE });

        expect(spy).toHaveBeenCalledTimes(6); 
      }
    )

  it('should (if paperClips is not equal to clipsToBuyTrust and wire is less than 1) return TOGGLE_MAKE_PAPERCLIP_BUTTON',
    () => {
      const action$ = ActionsObservable.of({
          type: actionTypes.MAKE_PAPERCLIP
        });
      const state$ = {
          value: {
              business: {
                  paperClips: 474,
                  clipsToBuyTrust: 1000,
                  wire: 0
              }
          }
      }
      const epic$ = Epic.makePaperClipEpic(action$, state$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )
  
      expect(array).toEqual([
        { 
          type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
          val: true
        }
      ])
    })
});
