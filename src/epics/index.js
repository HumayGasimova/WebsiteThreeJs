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
// import throwProjectEpic from '../epicsProject/throwProjectEpic';
import throwLexicalProcessingEpic from '../epicsProject/throwLexicalProcessingEpic';
import throwCombinatoryHarmonicsEpic from '../epicsProject/throwCombinatoryHarmonicsEpic';
import throwTheHadwingerProblemEpic from '../epicsProject/throwTheHadwingerProblemEpic';
import throwTheTothSausageConjectureEpic from '../epicsProject/throwTheTothSausageConjectureEpic';
import throwDonkeySpaceEpic from '../epicsProject/throwDonkeySpaceEpic';
import startAddingQOpsEpic from './startAddingQOpsEpic';
import startSubtractingQOpsEpic from './startSubtractingQOpsEpic';
import addChipEpic from './addChipEpic';
import toggleChipEpic from './toggleChipEpic';
import decreaseOpsEpic from './decreaseOpsEpic';
import startDecreasingOperationsEpic from './startDecreasingOperationsEpic';



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
    // throwProjectEpic,
    throwLexicalProcessingEpic,
    throwCombinatoryHarmonicsEpic,
    throwTheHadwingerProblemEpic,
    throwTheTothSausageConjectureEpic,
    throwDonkeySpaceEpic,
    startAddingQOpsEpic,
    startSubtractingQOpsEpic,
    addChipEpic,
    toggleChipEpic,
    decreaseOpsEpic,
    startDecreasingOperationsEpic
);
