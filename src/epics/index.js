import { combineEpics } from 'redux-observable';
import fetchWhiskiesEpic from '../epics/exEpic1'

export const rootEpic = combineEpics(fetchWhiskiesEpic);