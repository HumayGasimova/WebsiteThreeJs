import { combineEpics } from 'redux-observable';
// import fetchWhiskiesEpic from '../epics/exEpic1'

import checkButtonsEpic from './checkButtonsEpic';
import checkWireEpic from './checkWireEpic';
import paperclipsGenerateEpic from './PaperclipsGenerateEpic';
import updateUnsoldInventoryEpic from './updateUnsoldInventoryEpic';
import raisePriceEpic from './raisePriceEpic';
import marketingNextLevelEpic from './marketingNextLevelEpic';
import buyWireEpic from './buyWireEpic';
import autoPaperclipsStartEpic from './autoPaperclipsStartEpic';
// import repeatAutoPaperClippersEpic from '../epics/repeatAutoPaperClippersEpic';
import autoPaperClippersAddOneEpic from './autoPaperClippersAddOneEpic';
import startCreativityEpic from '../epicsProject/startCreativityEpic';
import creativityTurnOnEpic from '../epicsProject/creativityTurnOnEpic';





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
    autoPaperClippersAddOneEpic,
    startCreativityEpic,
    // creativityTurnOnEpic
);
