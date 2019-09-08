import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import updateUnsoldInventoryEpic from './updateUnsoldInventoryEpic';
import raisePriceEpic from '../epics/raisePriceEpic';
import marketingNextLevelEpic from '../epics/marketingNextLevelEpic';

export const rootEpic = combineEpics(
    paperclipsGenerateEpic,
    updateUnsoldInventoryEpic,
    raisePriceEpic,
    marketingNextLevelEpic
);