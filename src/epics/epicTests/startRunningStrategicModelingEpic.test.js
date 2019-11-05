import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('startRunningStrategicModelingEpic', () => {

  it('should return TOGGLE_NEW_TOURNAMENT_BUTTON, CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST, TOURNAMENT_STARTED, SET_PLAYERS_ARRAY, SHOW_ROUND_AND_PLAYERS, START_UPDATING_ROUNDS_ON_SCREEN, START_UPDATING_PLAYER_LEFT_ON_SCREEN, START_UPDATING_PLAYER_TOP_ON_SCREEN, GAME_STARTED, TOURNAMENT_DURATION',
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
        { type: actionTypes.TOURNAMENT_STARTED },
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
});