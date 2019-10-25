import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as projectsToAdd from '../../constants/projectsToAdd';
import * as actionTypes from "../../constants/actionTypes";

describe('throwLexicalProcessingEpic', () => {

  it('should return ADD_PROJECT',
    () => {
      const action$ = ActionsObservable.of({
        type: actionTypes.ADD_LEXICAL_PROCESSING
      });
      const epic$ = Epic.throwLexicalProcessingEpic(action$);
      const array = [];
      epic$.subscribe(
        (action) => array.push(action)
      )

      expect(array).toEqual([
        { 
            type: actionTypes.ADD_PROJECT,
            project: projectsToAdd.LexicalProcessing 
        }
      ])
    })
});