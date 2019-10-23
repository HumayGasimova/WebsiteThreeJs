import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('chooseFromDropdownEpic', () => {

    it('should (if chosen is "Low Risk") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS, UPDATE_INVESTMENTS_DELAY, STOP_UPDATING_SCREEN, STOP_UPDATING_INVESTMENTS_LINE, START_UPDATING_SCREEN, START_UPDATING_INVESTMENTS_LINE, STOP_ADDING_EMPTY_INVESTMENTS_LINE',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'Low Risk',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'Low Risk',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS },
                { 
                    type: actionTypes.UPDATE_INVESTMENTS_DELAY,
                    delayScreen: 10000,
                    delayLines: 5000
                },
                { type: actionTypes.STOP_UPDATING_SCREEN },
                { type: actionTypes.STOP_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.START_UPDATING_SCREEN },
                { type: actionTypes.START_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE }
            ])
        }
    )

    it('should (if chosen is "Med Risk") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS, UPDATE_INVESTMENTS_DELAY, STOP_UPDATING_SCREEN, STOP_UPDATING_INVESTMENTS_LINE, START_UPDATING_SCREEN, START_UPDATING_INVESTMENTS_LINE, STOP_ADDING_EMPTY_INVESTMENTS_LINE',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'Med Risk',
                index: 1
            });
            
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'Med Risk',
                    index: 1
                },
                { type: actionTypes.CLOSE_DROPDOWNS },
                { 
                    type: actionTypes.UPDATE_INVESTMENTS_DELAY,
                    delayScreen: 6000,
                    delayLines: 3000
                },
                { type: actionTypes.STOP_UPDATING_SCREEN },
                { type: actionTypes.STOP_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.START_UPDATING_SCREEN },
                { type: actionTypes.START_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE }
            ])
        }
    )

    it('should (if chosen is "High Risk") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS, UPDATE_INVESTMENTS_DELAY, STOP_UPDATING_SCREEN, STOP_UPDATING_INVESTMENTS_LINE, START_UPDATING_SCREEN, START_UPDATING_INVESTMENTS_LINE, START_ADDING_EMPTY_INVESTMENTS_LINE',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'High Risk',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'High Risk',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS },
                { 
                    type: actionTypes.UPDATE_INVESTMENTS_DELAY,
                    delayScreen: 5000,
                    delayLines: 2000
                },
                { type: actionTypes.STOP_UPDATING_SCREEN },
                { type: actionTypes.STOP_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.START_UPDATING_SCREEN },
                { type: actionTypes.START_UPDATING_INVESTMENTS_LINE },
                { type: actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE }
            ])
        }
    )

    it('should (if chosen is "Pick a Start") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'Pick a Start',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'Pick a Start',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "RANDOM") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'RANDOM',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'RANDOM',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "A100") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'A100',
                index: 1
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'A100',
                    index: 1
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )
    
    it('should (if chosen is "B100") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'B100',
                index: 1
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'B100',
                    index: 1
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "GREEDY") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'GREEDY',
                index: 1
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'GREEDY',
                    index: 1
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "GENEROUS") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'GENEROUS',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'GENEROUS',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "MINIMAX") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'MINIMAX',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'MINIMAX',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "TIT FOR TAT") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'TIT FOR TAT',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'TIT FOR TAT',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )

    it('should (if chosen is "BEAT LAST") return ADD_CHOSEN_FROM_DROPDOWN, CLOSE_DROPDOWNS',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CHOOSE_FROM_DROPDOWN,
                chosen: 'BEAT LAST',
                index: 0
            });
        
            const epic$ = Epic.chooseFromDropdownEpic(action$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
                    chosen: 'BEAT LAST',
                    index: 0
                },
                { type: actionTypes.CLOSE_DROPDOWNS }
            ])
        }
    )
   
});
