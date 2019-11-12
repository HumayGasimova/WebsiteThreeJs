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

import * as projectsToAdd from '../../constants/projectsToAdd';
import * as actionTypes from "../../constants/actionTypes";

/**
* Tests
*/

describe('wireButtonBufferEpic', () => {
    it('should (the number of arguments is equal or greater than 3, wireBuyerProjectIsShown is set to false and wireToAdd is equal or greater than 1500) return ADD_PROJECT, TOGGLE_WIRE_BUYER_PROJECT',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 1500
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_PROJECT,
                    project: projectsToAdd.WireBuyer
                },
                { 
                    type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
                }
            ])
        }
    )

    it('should (the number of arguments is equal or greater than 3, wireBuyerProjectIsShown is set to false and wireToAdd is equal or greater than 1500)) return ADD_PROJECT, TOGGLE_WIRE_BUYER_PROJECT',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 1508756
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_PROJECT,
                    project: projectsToAdd.WireBuyer
                },
                { 
                    type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
                }
            ])
        }
    )

    it('should (the number of arguments is equal or greater than 3 and wireBuyerProjectIsShown is true and wireToAdd is greater than or equal to 1500) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: true,
                        wireToAdd: 1500
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        }
    )

    it('should (the number of arguments is equal or greater than 3 and wireBuyerProjectIsShown is true and wireToAdd is less than 1500) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 400
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        }
    )

    it('should (the number of arguments is less than 3) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 1500
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        }
    )
});