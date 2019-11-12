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

describe('catchUnsoldInventoryEpic', () => {
    it('should return UPDATE_AVG_REV_PER_SEC with value equals to the number of arguments of .of and UPDATE_AVG_CLIPS_SOLD_PER_SEC',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.UPDATE_UNSOLD_INVENTORY
            },
            {
                type: actionTypes.UPDATE_UNSOLD_INVENTORY
            });
            const state$ = {
                value: {
                    business: {
                        paperclipPrice: 3.5
                    }
                }
            }
            const epic$ = Epic.catchUnsoldInventoryEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.UPDATE_AVG_REV_PER_SEC,
                    val: 7
                },
                { 
                    type: actionTypes.UPDATE_AVG_CLIPS_SOLD_PER_SEC,
                    val: 2
                }
            ])
        }
    )
});
