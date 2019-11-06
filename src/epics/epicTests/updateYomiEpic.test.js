import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";
import * as projectsToAdd from '../../constants/projectsToAdd';

describe('updateYomiEpic', () => {

    it('should (if coherentExtrapolatedVolitionIsThrown is set to false) return SEND_COMMENT_TO_TERMINAL, ADD_PROJECT, TOGGLE_THROWN_PROJECT',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.UPDATE_YOMI
            });
            const state$ = {
                    value: {
                        business: {
                            coherentExtrapolatedVolitionIsThrown: false,
                            strategyWon: 'RANDOM',
                            valueWon: 568,
                            yomi: 764
                        }
                    }
                }
            const epic$ = Epic.updateYomiEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                { 
                    type: actionTypes.SEND_COMMENT_TO_TERMINAL,
                    comment: `RANDOM scored 568. Total amount of yomi is 764`
                },
                { 
                    type: actionTypes.ADD_PROJECT,
                    project: projectsToAdd.CoherentExtrapolatedVolition
                },
                {  
                    type: actionTypes.TOGGLE_THROWN_PROJECT,
                    project: 'coherentExtrapolatedVolition',
                    val: true
                }
            ])
        }
    )

    it('should (if coherentExtrapolatedVolitionIsThrown is set to true) return SEND_COMMENT_TO_TERMINAL, ADD_PROJECT, TOGGLE_THROWN_PROJECT',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.UPDATE_YOMI
            });
            const state$ = {
                    value: {
                        business: {
                            coherentExtrapolatedVolitionIsThrown: true,
                            strategyWon: 'RANDOM',
                            valueWon: 568,
                            yomi: 764
                        }
                    }
                }
            const epic$ = Epic.updateYomiEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([
                {  type: actionTypes.SEND_COMMENT_TO_TERMINAL,
                    comment: `RANDOM scored 568. Total amount of yomi is 764`
                },
            ])
        }
    )
});