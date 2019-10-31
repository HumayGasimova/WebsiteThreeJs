import * as actionTypes from '../constants/actionTypes';

export function checkButtons() {
    return { 
        type: actionTypes.CHECK_BUTTONS
    };
};

export function sellPaperclips() {
    return { 
        type: actionTypes.START_SELLING
    };
};

export function makePaperclip() {
    return {
        type: actionTypes.MAKE_PAPERCLIP
    }
};

export function updateFunds(value) {
    return { 
        type: actionTypes.UPDATE_FUNDS,
        value: value
    };
};

export function startUpdatingUnsoldInventory() {
    return { 
        type: actionTypes.START_UPDATING_UNSOLD_INVENTORY
    };
};

export function stopUpdatingUnsoldInventory() {
    return { 
        type: actionTypes.STOP_UPDATING_UNSOLD_INVENTORY
    };
};

export function updateUnsoldInventory() {
    return { 
        type: actionTypes.UPDATE_UNSOLD_INVENTORY
    };
};

export function lowerPrice() {
    return { 
        type: actionTypes.LOWER_PRICE
    };
};

export function raisePrice() {
    return { 
        type: actionTypes.RAISE_PRICE
    };
};

export function updatePublicDemand() {
    return { 
        type: actionTypes.UPDATE_PUBLIC_DEMAND
    };
};

export function toggleMarketingButton() {
    return { 
        type: actionTypes.TOGGLE_MARKETING_BUTTON
    };
};

export function marketing() {
    return { 
        type: actionTypes.MARKETING
    };
};

export function marketingNextLevel() {
    return { 
        type: actionTypes.MARKETING_NEXT_LEVEL
    };
};

export function updateMaxPublicDemand() {
    return { 
        type: actionTypes.UPDATE_MAX_PUBLIC_DEMAND
    };
};

export function startBuyingWire() {
    return { 
        type: actionTypes.START_BUYING_WIRE
    };
};

export function buyWire() {
    return { 
        type: actionTypes.BUY_WIRE
    };
};

export function randomWirePrice(value) {
    return { 
        type: actionTypes.RANDOM_WIRE_PRICE,
        value: value
    };
};

export function toggleWireButton() {
    return { 
        type: actionTypes.TOGGLE_WIRE_BUTTON
    };
};

export function checkExistenceOfWire() {
    return { 
        type: actionTypes.CHECK_EXISTENCE_OF_WIRE
    };
};

export function stop() {
    return { 
        type: actionTypes.STOP
    };
};

export function wireExists(val) {
    return { 
        type: actionTypes.WIRE_EXISTS,
        val: val
    };
};

export function autoPaperclips() {
    return { 
        type: actionTypes.AUTO_PAPERCLIPS
    };
};

export function autoPaperclipsStart() {
    return { 
        type: actionTypes.AUTO_PAPERCLIPS_START
    };
};

export function autoClippersAddOne() {
    return { 
        type: actionTypes.AUTO_CLIPPERS_ADD_ONE
    };
};

export function setAutoClipperInitPrice() {
    return { 
        type: actionTypes.SET_AUTO_CLIPPER_INIT_PRICE
    };
};

export function toggleAutoClippersButton() {
    return { 
        type: actionTypes.TOGGLE_AUTO_CLIPPERS_BUTTON
    };
};

export function toggleMegaClippersButton() {
    return { 
        type: actionTypes.TOGGLE_MEGA_CLIPPERS_BUTTON
    };
};

export function trustPlusOne() {
    return { 
        type: actionTypes.TRUST_PLUS_ONE,
    };
};

export function trustPlusOneFromProject() {
    return { 
        type: actionTypes.TRUST_PLUS_ONE_FROM_PROJECT,
    };
};

export function increaseOps() {
    return { 
        type: actionTypes.INCREASE_OPS
    };
};

export function startDecreasingOperations() {
    return { 
        type: actionTypes.START_DECREASING_OPERATIONS
    };
};

export function startDecreasingOps() {
    return { 
        type: actionTypes.START_DECREASING_OPS
    };
};

export function stopDecreasingOps() {
    return { 
        type: actionTypes.STOP_DECREASING_OPERATIONS
    };
};

export function decreaseOps() {
    return { 
        type: actionTypes.DECREASE_OPS
    };
};


export function increaseProcessors() {
    return { 
        type: actionTypes.INCREASE_PROCESSORS
    };
};

export function increaseProcessorsMemory() {
    return { 
        type: actionTypes.INCREASE_PROCESSORS_MEMORY
    };
};

export function increaseCreativity() {
    return { 
        type: actionTypes.INCREASE_CREATIVITY
    };
};

export function initProjects(x, y, z) {
    return { 
        type: actionTypes.INIT_PROJECTS,
        card1: x,
        card2: y,
        card3: z
    };
};

export function checkCardValidity(id, val, i) {
    return { 
        type: actionTypes.CHECK_CARD_VALIDITY,
        cardId: id,
        valid: val,
        i: i
    };
};

export function deleteCard(id) {
    return { 
        type: actionTypes.DELETE_CARD,
        cardId: id
    };
};

export function showRevTracker(price) {
    return { 
        type: actionTypes.SHOW_REV_TRACKER,
        price: price
    };
};

export function addProject(obj) {
    return { 
        type: actionTypes.ADD_PROJECT,
        project: obj
    };
};

export function removePriceOfProjectOps(price) {
    return { 
        type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS,
        ops: price
    };
};

export function removePriceOfProjectCreat(price) {
    return { 
        type: actionTypes.REMOVE_PRICE_OF_PROJECT_CREAT,
        creativity: price
    };
};

export function removePriceOfProjectOpsAndCreat(ops, creat) {
    return { 
        type: actionTypes.REMOVE_PRICE_OF_PROJECT_OPS_AND_CREAT,
        ops: ops,
        creativity: creat
    };
};

export function removePriceOfProjectTrust(price) {
    return { 
        type: actionTypes.REMOVE_PRICE_OF_PROJECT_TRUST,
        trust: price
    };
};

export function improveAutoClippers(val) {
    return { 
        type: actionTypes.IMPROVE_AUTO_PAPER_CLIPPER,
        val: val
    };
};

export function toggleMakePaperclipButton(val) {
    return { 
        type: actionTypes.TOGGLE_MAKE_PAPERCLIP_BUTTON,
        val: val
    };
};

export function improveWireExtrusion(val) {
    return { 
        type: actionTypes.IMPROVE_WIRE_EXTRUSION,
        val: val
    };
};

export function startCreativityCounter() {
    return { 
        type: actionTypes.START_CREATIVITY_COUNTER
    };
};

export function creativityTurnOn() {
    return { 
        type: actionTypes.CREATIVITY_TURN_ON
    };
};

export function addLexicalProcessing() {
    return { 
        type: actionTypes.ADD_LEXICAL_PROCESSING
    };
};

export function addCombinatoryHarmonics() {
    return { 
        type: actionTypes.ADD_COMBINATORY_HARMONICS
    };
};

export function addTheHadwingerProblem() {
    return { 
        type: actionTypes.ADD_THE_HADWINGER_PROBLEM
    };
};

export function addTheTothSausageConjecture() {
    return { 
        type: actionTypes.ADD_THE_TOTH_SAUSAGE_CONJECTURE
    };
};

export function addDonkeySpace() {
    return { 
        type: actionTypes.ADD_DONKEY_SPACE
    };
};

export function startImprovingMarketing(action) {
    return { 
        type: actionTypes.START_IMPROVING_MARKETING,
        act: action
    };
};

export function improveMarketing(val) {
    return { 
        type: actionTypes.IMPROVE_MARKETING,
        val: val
    };
};

export function showInvestEngine() {
    return { 
        type: actionTypes.SHOW_INVESTMENT_ENGINE
    };
};

export function showStrategicModeling() {
    return { 
        type: actionTypes.SHOW_STRATEGIC_MODELING
    };
};

export function sendCommentToTerminal(comment) {
    return { 
        type: actionTypes.SEND_COMMENT_TO_TERMINAL,
        comment: comment
    };
};

export function addNewStrategy(strategy) {
    return { 
        type: actionTypes.ADD_NEW_STRATEGY,
        strategy: strategy
    };
};

export function toggleDropdownInvestments() {
    return { 
        type: actionTypes.TOGGLE_DROPDOWN_INVESTMENTS
    };
};

export function toggleDropdownStrategicModeling() {
    return { 
        type: actionTypes.TOGGLE_DROPDOWN_STRATEGIC_MODELING
    };
};

export function closeDropdowns() {
    return { 
        type: actionTypes.CLOSE_DROPDOWNS
    };
};

export function showQuantumComputing() {
    return { 
        type: actionTypes.SHOW_QUANTUM_COMPUTING
    };
};

export function showQuantCompMessage() {
    return { 
        type: actionTypes.SHOW_QUANT_COMP_MESSAGE
    };
};

export function addChip(obj) {
    return { 
        type: actionTypes.ADD_CHIP,
        obj: obj
    };
};

export function toggleChip(val, chipsNumber) {
    return { 
        type: actionTypes.TOGGLE_CHIP,
        val: val,
        chipsNumber: chipsNumber
    };
};

export function changeToQOps() {
    return { 
        type: actionTypes.CHANGE_TO_Q_OPS
    };
};

export function startAddingQOps(chipsNumber) {
    return { 
        type: actionTypes.START_ADDING_Q_OPS,
        chipsNumber: chipsNumber
    };
};

export function addQOps(chipsNumber) {
    return { 
        type: actionTypes.ADD_Q_OPS,
        chipsNumber: chipsNumber
    };
};

export function stopAddingQOps() {
    return { 
        type: actionTypes.STOP_ADDING_Q_OPS
    };
};

export function startSubtractingQOps(chipsNumber) {
    return { 
        type: actionTypes.START_SUBTRACTING_Q_OPS,
        chipsNumber: chipsNumber
    };
};

export function subtractQOps(chipsNumber) {
    return { 
        type: actionTypes.SUBTRACT_Q_OPS,
        chipsNumber: chipsNumber
    };
};

export function stopSubtractingQOps() {
    return { 
        type: actionTypes.STOP_SUBTRACTING_Q_OPS
    };
};

export function captureCurrentQOps(val) {
    return { 
        type: actionTypes.CAPTURE_CURRENT_Q_OPS,
        val: val
    };
};

export function updateOps(val) {
    return { 
        type: actionTypes.UPDATE_OPS,
        val: val
    };
};

export function startTimer() {
    return { 
        type: actionTypes.START_TIMER
    };
};

export function clickWireButton() {
    return { 
        type: actionTypes.CLICK_WIRE_BUTTON
    };
};

export function showAutoWireBuyer() {
    return { 
        type: actionTypes.SHOW_AUTO_WIRE_BUYER
    };
};

export function toggleWireBuyerProject() {
    return { 
        type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
    };
};

export function autoWireBuyer() {
    return { 
        type: actionTypes.AUTO_WIRE_BUYER
    };
};

export function toggleAutoWireBuyer() {
    return { 
        type: actionTypes.TOGGLE_AUTO_WIRE_BUYER
    };
};

export function addMegaClippers() {
    return { 
        type: actionTypes.ADD_MEGA_CLIPPERS
    };
};

export function showMegaClippers() {
    return { 
        type: actionTypes.SHOW_MEGA_CLIPPERS
    };
};

export function showAutoClippers() {
    return { 
        type: actionTypes.SHOW_AUTO_CLIPPERS
    };
};

export function calcDelayUnsoldInventary() {
    return { 
        type: actionTypes.CALC_DELAY_UNSOLD_INVENTARY
    };
};

export function updateClipsPerSec(val) {
    return { 
        type: actionTypes.UPDATE_CLIPS_PER_SEC,
        val: val
    };
};

export function startInvestmentsDeposit() {
    return { 
        type: actionTypes.START_INVESTMENTS_DEPOSIT
    };
};

export function getDeposit() {
    return { 
        type: actionTypes.GET_DEPOSIT
    };
};

export function startUpdatingScreen() {
    return { 
        type: actionTypes.START_UPDATING_SCREEN
    };
};

export function stopUpdatingScreen() {
    return { 
        type: actionTypes.STOP_UPDATING_SCREEN
    };
};

export function addInvestmentsLine(obj, val) {
    return { 
        type: actionTypes.ADD_INVESTMENTS_LINE,
        obj: obj,
        notEmpty: val
    };
};

export function startUpdatingInvestmentLines() {
    return { 
        type: actionTypes.START_UPDATING_INVESTMENTS_LINE
    };
};

export function stopUpdatingInvestmentLines() {
    return { 
        type: actionTypes.STOP_UPDATING_INVESTMENTS_LINE
    };
};

export function updateInvestmentsLines(arr) {
    return { 
        type: actionTypes.UPDATE_INVESTMENTS_LINES,
        array: arr
    };
};

export function startCountingRisk() {
    return { 
        type: actionTypes.START_COUNTING_RISK
    };
};

export function updateInvestmentsTotal(val) {
    return { 
        type: actionTypes.UPDATE_INVESTMENTS_TOTAL,
        total: val
    };
};

export function updateInvestmentsCash(val) {
    return { 
        type: actionTypes.UPDATE_INVESTMENTS_CASH,
        cash: val
    };
};

export function updateInvestmentsStocks(val) {
    return { 
        type: actionTypes.UPDATE_INVESTMENTS_STOCKS,
        stocks: val
    };
};

export function startApplyingProfitLoss() {
    return { 
        type: actionTypes.START_APPLYING_PROFIT_LOSS
    };
};

export function updateFakeInvestmentsCash(val) {
    return { 
        type: actionTypes.UPDATE_FAKE_INVESTMENTS_CASH,
        cash: val
    };
};

export function startInvestmentsWithdraw() {
    return { 
        type: actionTypes.START_INVESTMENTS_WITHDRAW
    };
};

export function updateFundsWithdraw(val) {
    return { 
        type: actionTypes.UPDATE_FUNDS_WITHDRAW,
        val: val
    };
};


export function chooseFromDropdown(chosen, index) {
    return { 
        type: actionTypes.CHOOSE_FROM_DROPDOWN,
        chosen: chosen,
        index: index
    };
};

export function addChosenFromDropdown(chosen, index) {
    return { 
        type: actionTypes.ADD_CHOSEN_FROM_DROPDOWN,
        chosen: chosen,
        index: index
    };
};

export function updateInvestmentsDelay(delayScreen, delayLines) {
    return { 
        type: actionTypes.UPDATE_INVESTMENTS_DELAY,
        delayScreen: delayScreen,
        delayLines: delayLines
    };
};

export function startAddingEmptyInvestmentsLine() {
    return { 
        type: actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE
    };
};

export function stopAddingEmptyInvestmentsLine() {
    return { 
        type: actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE
    };
};

export function updateAvgRevPerSec(val) {
    return { 
        type: actionTypes.UPDATE_AVG_REV_PER_SEC,
        val: val
    };
};

export function updateAvgClipsSoldPerSec(val) {
    return { 
        type: actionTypes.UPDATE_AVG_CLIPS_SOLD_PER_SEC,
        val: val
    };
};

export function megaClippersButtonPressed() {
    return { 
        type: actionTypes.MEGA_CLIPPERS_BUTTON_PRESSED
    };
};

export function startMegaClippers() {
    return { 
        type: actionTypes.START_MEGACLIPPERS
    };
};

export function improveMegaClippers(val) {
    return { 
        type: actionTypes.IMPROVE_MEGA_CLIPPERS,
        val: val
    };
};

export function switchOffOrOnAutoAndMegaClippers(val) {
    return { 
        type: actionTypes.SWITCH_OFF_OR_ON_AUTO_AND_MEGA_CLIPPERS,
        val: val
    };
};

export function startNewTournament() {
    return { 
        type: actionTypes.START_NEW_TOURNAMENT
    };
};

export function tournamentState(val) {
    return { 
        type: actionTypes.TOURNAMENT_STATE,
        val: val
    };
};

export function updateNewTournamentCost() {
    return { 
        type: actionTypes.UPDATE_NEW_TOURNAMENT_COST
    };
};

export function toggleNewTournamentButton() {
    return { 
        type: actionTypes.TOGGLE_NEW_TOURNAMENT_BUTTON
    };
};

export function startRunningStrategicModeling() {
    return { 
        type: actionTypes.START_RUNNING_STRATEGIC_MODELING
    };
};




export function updateStrategicModelingData(obj) {
    return { 
        type: actionTypes.UPDATE_STRATEGIC_MODELING_DATA,
        obj: obj
    };
};

export function updateStrategicModelingCurrentList(obj, round) {
    return { 
        type: actionTypes.UPDATE_STRATEGIC_MODELING_CURRENT_LIST,
        obj: obj,
        round: round
    };
};

export function strategyChosen(strategy, val) {
    return { 
        type: actionTypes.STRATEGY_CHOSEN,
        strategy: strategy, 
        val: val
    };
};

export function clearChosenFromStrategicModelingDropdownList() {
    return { 
        type: actionTypes.CLEAR_CHOSEN_FROM_STRATEGIC_MODELING_DROPDOWN_LIST
    };
};

export function updateStrategicModelingRound(round) {
    return { 
        type: actionTypes.UPDATE_STRATEGIC_MODELING_ROUND,
        round: round
    };
};

export function tournamentStarted() {
    return { 
        type: actionTypes.TOURNAMENT_STARTED
    };
};

export function stopTournament() {
    return { 
        type: actionTypes.STOP_TOURNAMENT
    };
};

export function tournamentDuration() {
    return { 
        type: actionTypes.TOURNAMENT_DURATION
    };
};

export function updateNumberOfRounds(val) {
    return { 
        type: actionTypes.UPDATE_NUMBER_OF_ROUND,
        val: val
    };
};

export function showRoundAndPlayers(val) {
    return { 
        type: actionTypes.SHOW_ROUND_AND_PLAYERS,
        val: val
    };
};

export function startUpdatingRoundsOnScreen() {
    return { 
        type: actionTypes.START_UPDATING_ROUNDS_ON_SCREEN
    };
};

export function updateRoundsOnScreen() {
    return { 
        type: actionTypes.UPDATE_ROUNDS_ON_SCREEN
    };
};

export function startUpdatingPlayerLeftOnScreen() {
    return { 
        type: actionTypes.START_UPDATING_PLAYER_LEFT_ON_SCREEN
    };
};

export function updatePlayerLeftOnScreen() {
    return { 
        type: actionTypes.UPDATE_PLAYER_LEFT_ON_SCREEN
    };
};

export function startUpdatingPlayerTopOnScreen() {
    return { 
        type: actionTypes.START_UPDATING_PLAYER_TOP_ON_SCREEN
    };
};

export function updatePlayerTopOnScreen() {
    return { 
        type: actionTypes.UPDATE_PLAYER_TOP_ON_SCREEN
    };
};

export function setPlayersArrays() {
    return { 
        type: actionTypes.SET_PLAYERS_ARRAY
    };
};

export function gameStarted() {
    return { 
        type: actionTypes.GAME_STARTED
    };
};

export function allRoundsResult(obj) {
    return { 
        type: actionTypes.ALL_ROUNDS_RESULT,
        obj: obj
    };
};

export function strategicModelingResult() {
    return { 
        type: actionTypes.STRATEGIC_MODELING_RESULT
    };
};

export function startCountingResult() {
    return { 
        type: actionTypes.START_COUNTING_RESULT
    };
};

export function updatedAllRoundsRes(obj) {
    return { 
        type: actionTypes.UPDATED_ALL_ROUNDS_RES,
        obj: obj
    };
};

export function countFinalResultOfEachStrategy() {
    return { 
        type: actionTypes.COUNT_FINAL_RESULT_OF_EACH_STRATEGY
    };
};

