import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import updateUnsoldInventoryEpic from './updateUnsoldInventoryEpic';
import raisePriceEpic from '../epics/raisePriceEpic';
import marketingNextLevelEpic from '../epics/marketingNextLevelEpic';
import buyWireEpic from '../epics/buyWireEpic';
import autoPaperclipsStartEpic from '../epics/autoPaperclipsStartEpic';
import repeatAutoPaperClippersEpic from '../epics/repeatAutoPaperClippersEpic'


export const rootEpic = combineEpics(
    paperclipsGenerateEpic,
    updateUnsoldInventoryEpic,
    raisePriceEpic,
    marketingNextLevelEpic,
    buyWireEpic,
    autoPaperclipsStartEpic,
    repeatAutoPaperClippersEpic
);
