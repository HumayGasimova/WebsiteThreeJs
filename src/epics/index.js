import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import updateUnsoldInventoryEpic from './updateUnsoldInventoryEpic';
import raisePriceEpic from '../epics/raisePriceEpic';
// export const rootEpic = combineEpics(fetchWhiskiesEpic);\

export const rootEpic = combineEpics(
    paperclipsGenerateEpic,
    updateUnsoldInventoryEpic,
    raisePriceEpic
);