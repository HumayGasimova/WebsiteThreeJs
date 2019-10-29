import { combineEpics } from 'redux-observable';
import * as Epic from './index'

// import checkButtonsEpic from './checkButtonsEpic';
// import checkWireEpic from './checkWireEpic';
// import paperclipsGenerateEpic from './paperclipsGenerateEpic';
// import makePaperClipEpic from './makePaperClipEpic';
// import raisePriceEpic from './raisePriceEpic';
// import marketingNextLevelEpic from './marketingNextLevelEpic';
// import buyWireEpic from './buyWireEpic';
// import autoPaperclipsStartEpic from './autoPaperclipsStartEpic';
// import autoPaperClippersAddOneEpic from './autoPaperClippersAddOneEpic';
// import startCreativityEpic from './startCreativityEpic';
// import throwLexicalProcessingEpic from './throwLexicalProcessingEpic';
// import throwCombinatoryHarmonicsEpic from './throwCombinatoryHarmonicsEpic';
// import throwTheHadwingerProblemEpic from './throwTheHadwingerProblemEpic';
// import throwTheTothSausageConjectureEpic from './throwTheTothSausageConjectureEpic';
// import throwDonkeySpaceEpic from './throwDonkeySpaceEpic';
// import startAddingQOpsEpic from './startAddingQOpsEpic';
// import startSubtractingQOpsEpic from './startSubtractingQOpsEpic';
// import addChipEpic from './addChipEpic';
// import toggleChipEpic from './toggleChipEpic';
// import decreaseOpsEpic from './decreaseOpsEpic';
// import startDecreasingOperationsEpic from './startDecreasingOperationsEpic';
// import wireButtonBufferEpic from './wireButtonBufferEpic';
// import autoWireBuyerEpic from './autoWireBuyerEpic';
// import throwMegaClippersEpic from './throwMegaClippersEpic';
// import startUpdatingUnsoldInventoryEpic from './startUpdatingUnsoldInventoryEpic';
// import startImprovingMarketingEpic from './startImprovingMarketingEpic';
// import catchPaperclipsEpic from './catchPaperclipsEpic';
// import startInvestmentsDepositEpic from './startInvestmentsDepositEpic';
// import startUpdatingScreenEpic from './startUpdatingScreenEpic';
// import startUpdatingInvestmentLinesEpic from './startUpdatingInvestmentLinesEpic';
// import startCountingRiskEpic from './startCountingRiskEpic';
// import startApplyingProfitLossEpic from './startApplyingProfitLossEpic';
// import startInvestmentsWithdrawEpic from './startInvestmentsWithdrawEpic';
// import chooseFromDropdownEpic from './chooseFromDropdownEpic';
// import startAddingEmptyInvestmentsLineEpic from './startAddingEmptyInvestmentsLineEpic';
// import catchUnsoldInventoryEpic from './catchUnsoldInventoryEpic';
// import startMegaClippersEpic from './startMegaClippersEpic';

// import fetchWhiskiesEpic from '../epics/exEpic1'

export const rootEpic = combineEpics(
    Epic.checkButtonsEpic,
    Epic.checkWireEpic,
    Epic.paperclipsGenerateEpic,
    Epic.makePaperClipEpic,
    Epic.raisePriceEpic,
    Epic.marketingNextLevelEpic,
    Epic.buyWireEpic,
    Epic.autoPaperclipsStartEpic,
    Epic.autoPaperClippersAddOneEpic,
    Epic.startCreativityEpic,
    Epic.throwLexicalProcessingEpic,
    Epic.throwCombinatoryHarmonicsEpic,
    Epic.throwTheHadwingerProblemEpic,
    Epic.throwTheTothSausageConjectureEpic,
    Epic.throwDonkeySpaceEpic,
    Epic.startAddingQOpsEpic,
    Epic.startSubtractingQOpsEpic,
    Epic.addChipEpic,
    Epic.toggleChipEpic,
    Epic.decreaseOpsEpic,
    Epic.startDecreasingOperationsEpic,
    Epic.wireButtonBufferEpic,
    Epic.autoWireBuyerEpic,
    Epic.throwMegaClippersEpic,
    Epic.startUpdatingUnsoldInventoryEpic,
    Epic.startImprovingMarketingEpic,
    Epic.catchPaperclipsEpic,
    Epic.startInvestmentsDepositEpic,
    Epic.startUpdatingScreenEpic,
    Epic.startUpdatingInvestmentLinesEpic,
    Epic.startCountingRiskEpic,
    Epic.startApplyingProfitLossEpic,
    Epic.startInvestmentsWithdrawEpic,
    Epic.chooseFromDropdownEpic,
    Epic.startAddingEmptyInvestmentsLineEpic,
    Epic.catchUnsoldInventoryEpic,
    Epic.startMegaClippersEpic,
    Epic.startNewTournamentEpic,
    Epic.startRunningStrategicModelingEpic,
    Epic.updateStrategicModelingCurrentListEpic
);
