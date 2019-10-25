import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as projectsToAdd from '../../constants/projectsToAdd';
import * as actionTypes from "../../constants/actionTypes";

describe('throwDonkeySpaceEpic', () => {

  it('should return ADD_PROJECT',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_DONKEY_SPACE
      });
      const epic$ = Epic.throwDonkeySpaceEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.ADD_PROJECT,
            project: projectsToAdd.DonkeySpace 
        }
      ])
    })
});