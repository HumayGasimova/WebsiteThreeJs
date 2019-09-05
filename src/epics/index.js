import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'
import paperclipsGenerateEpic from '../epics/PaperclipsGenerate';

// export const rootEpic = combineEpics(fetchWhiskiesEpic);\

export const rootEpic = combineEpics(paperclipsGenerateEpic);