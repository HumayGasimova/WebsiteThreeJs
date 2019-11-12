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

describe('startCountingResultEpic', () => {
    it('should return UPDATED_ALL_ROUNDS_RES, ADD_PROJECT, COUNT_FINAL_RESULT_OF_EACH_STRATEGY',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_COUNTING_RESULT
            });
            const state$ = {
                value: {
                    business: {
                        allRoundsRes: [
                            {cell1: 30, cell2: 40, cell3: 20, cell4: 10, playerLeft: {val: 1, strategy: "RANDOM"}, playerTop: {val: 1, strategy: "MINIMAX"}},
                            {cell1: 30, cell2: 40, cell3: 20, cell4: 10, playerLeft: {val: 2, strategy: "RANDOM"}, playerTop: {val: 2, strategy: "MINIMAX"}},
                            {cell1: 30, cell2: 40, cell3: 20, cell4: 10, playerLeft: {val: 1, strategy: "RANDOM"}, playerTop: {val: 2, strategy: "MINIMAX"}},
                            {cell1: 30, cell2: 40, cell3: 20, cell4: 10, playerLeft: {val: 2, strategy: "RANDOM"}, playerTop: {val: 1, strategy: "MINIMAX"}}
                        ]
                    }
                }
            }
            const epic$ = Epic.startCountingResultEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.UPDATED_ALL_ROUNDS_RES,
                    array: [{
                        playerLeft: {
                            strategy: "RANDOM",
                            value: 15
                        },
                        playerTop: {
                            strategy: "MINIMAX",
                            value: 15
                        }
                    },
                    {
                        playerLeft: {
                            strategy: "RANDOM",
                            value: 20
                        },
                        playerTop: {
                            strategy: "MINIMAX",
                            value: 20
                        }
                    },
                    {
                        playerLeft: {
                            strategy: "RANDOM",
                            value: 20
                        },
                        playerTop: {
                            strategy: "MINIMAX",
                            value: 0
                        }
                    },
                    {
                        playerLeft: {
                            strategy: "RANDOM",
                            value: 0
                        },
                        playerTop: {
                            strategy: "MINIMAX",
                            value: 40
                        }
                    }
                ]},
                { type: actionTypes.COUNT_FINAL_RESULT_OF_EACH_STRATEGY }
            ])
        }
    )
});
