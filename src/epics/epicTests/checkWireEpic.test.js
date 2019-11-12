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
* Tests
*/

describe('checkWireEpic', () => {
    it('should (if wire is equal to 0) return WIRE_EXISTS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHECK_EXISTENCE_OF_WIRE
            });
            const state$ = {
                value: {
                    business: {
                        wire: 46
                    }
                }
            }
            const epic$ = Epic.checkWireEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.WIRE_EXISTS,
                    val: true
                }
            ])
        }
    )

    it('should (if wire is not equal to 0) return STOP and WIRE_EXISTS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHECK_EXISTENCE_OF_WIRE
            });
            const state$ = {
                value: {
                    business: {
                        wire: 0
                    }
                }
            }
            const epic$ = Epic.checkWireEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.STOP },
                { 
                    type: actionTypes.WIRE_EXISTS,
                    val: false
                }
            ])
        }
    )
});
