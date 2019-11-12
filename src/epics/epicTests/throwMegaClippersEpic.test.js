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

describe('throwMegaClippersEpic', () => {
  it('should return ADD_PROJECT',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_MEGA_CLIPPERS
      });
      const epic$ = Epic.throwMegaClippersEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
          type: actionTypes.ADD_PROJECT,
          project: projectsToAdd.MegaClippers 
        }
      ])
    })
});
