import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'

import checkButtonsEpic from './checkButtonsEpic';
import checkWireEpic from './checkWireEpic';
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import updateUnsoldInventoryEpic from './updateUnsoldInventoryEpic';
import raisePriceEpic from '../epics/raisePriceEpic';
import marketingNextLevelEpic from '../epics/marketingNextLevelEpic';
import buyWireEpic from '../epics/buyWireEpic';
import autoPaperclipsStartEpic from '../epics/autoPaperclipsStartEpic';
// import repeatAutoPaperClippersEpic from '../epics/repeatAutoPaperClippersEpic';
import autoPaperClippersAddOneEpic from '../epics/autoPaperClippersAddOneEpic';



export const rootEpic = combineEpics(
    checkButtonsEpic,
    checkWireEpic,
    paperclipsGenerateEpic,
    updateUnsoldInventoryEpic,
    raisePriceEpic,
    marketingNextLevelEpic,
    buyWireEpic,
    autoPaperclipsStartEpic,
    // repeatAutoPaperClippersEpic,
    autoPaperClippersAddOneEpic
);
