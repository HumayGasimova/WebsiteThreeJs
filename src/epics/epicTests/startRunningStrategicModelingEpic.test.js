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

describe('startRunningStrategicModelingEpic', () => {
    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'Pick a Start'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'RANDOM'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "RANDOM", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'A100'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "A100", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'B100'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "B100", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'GREEDY'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "GREEDY", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'GENEROUS'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "GENEROUS", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'MINIMAX'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "MINIMAX", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'TIT FOR TAT'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "TIT FOR TAT", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )

    it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, STRATEGY_CHOSEN, TOGGLE_STRATEGIC_MODELING_LEFT_PART, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, STRATEGIC_MODELING_RESULT, TOURNAMENT_DURATION',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.START_RUNNING_STRATEGIC_MODELING
            });
            const state$ = {
                value: {
                    business: {
                        chosenListDropdown: ['Pick a Start', 'BEAT LAST'],
                    }
                }
            }
            const epic$ = Epic.startRunningStrategicModelingEpic(action$, state$);
            const array = [];
            epic$.subscribe(
            (action) => array.push(action)
            )

            expect(array).toEqual([
                { type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON},
                { type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST },
                { 
                    type: actionTypes.STRATEGY_CHOSEN,
                    strategy: "BEAT LAST", 
                    val: true
                },
                { 
                    type: actionTypes.TOGGLE_STRATEGIC_MODELING_LEFT_PART,
                    val: false
                },
                { type: actionTypes.SET_PLAYERS_ARRAY },
                {
                    type: actionTypes.SHOW_ROUND_AND_PLAYERS,
                    val: true
                },
                { type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN },
                { type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN },
                { type: actionTypes.GAME_STARTED },
                { type: actionTypes.STRATEGIC_MODELING_RESULT },
                { type: actionTypes.TOURNAMENT_DURATION },
            ])
        }
    )
});
