case actionTypes.CHECK_BUTTONS:
    return state;
case actionTypes.START_SELLING:
    return state;
case actionTypes.START_UPDATING_UNSOLD_INVENTORY:
    return state;
case actionTypes.STOP_UPDATING_UNSOLD_INVENTORY:
    return state;
case actionTypes.MARKETING:
    return state;
case actionTypes.START_BUYING_WIRE:
    return state;
case actionTypes.CHECK_EXISTENCE_OF_WIRE:
    return state; 
case actionTypes.STOP:
    return state; 
case actionTypes.AUTO_PAPERCLIPS:
    return state;
case actionTypes.AUTO_PAPERCLIPS_START:
    return state;  
case actionTypes.REPEAT_AUTO_PAPER_CLIPPERS:
    return state;
case actionTypes.START_DECREASING_OPS:
    return state; 
case actionTypes.STOP_DECREASING_OPERATIONS:
    return state; 
case actionTypes.START_CREATIVITY_COUNTER:
    return state;  
case actionTypes.ADD_LEXICAL_PROCESSING:
    return state;  
case actionTypes.ADD_COMBINATORY_HARMONICS:
    return state;
case actionTypes.ADD_THE_HADWINGER_PROBLEM:
    return state;  
case actionTypes.ADD_THE_TOTH_SAUSAGE_CONJECTURE:
    return state;
case actionTypes.ADD_DONKEY_SPACE:
    return state;
case actionTypes.START_IMPROVING_MARKETING:
    return state;
case actionTypes.THROW_PROJECT:
    return state; 
case actionTypes.START_ADDING_Q_OPS:
    return state;
case actionTypes.STOP_ADDING_Q_OPS:
    return state;
case actionTypes.START_SUBTRACTING_Q_OPS:
    return state;
case actionTypes.STOP_SUBTRACTING_Q_OPS:
    return state;
case actionTypes.START_DECREASING_OPERATIONS:
    return state;
case actionTypes.CLICK_WIRE_BUTTON:
    return state;
case actionTypes.START_UPDATING_SCREEN:
    return state;
case actionTypes.AUTO_WIRE_BUYER:
    return state;
case actionTypes.START_INVESTMENTS_DEPOSIT:
    return state;
case actionTypes.START_APPLYING_PROFIT_LOSS:
    return state;
case actionTypes.STOP_UPDATING_SCREEN:
    return state;
case actionTypes.CHOOSE_FROM_DROPDOWN:
    return state;
case actionTypes.ADD_MEGA_CLIPPERS:
    return state;
case actionTypes.START_COUNTING_RISK:
    return state;
case actionTypes.STOP_UPDATING_INVESTMENTS_LINE:
    return state;
case actionTypes.START_ADDING_EMPTY_INVESTMENTS_LINE:
    return state;
case actionTypes.STOP_ADDING_EMPTY_INVESTMENTS_LINE:
    return state;
case actionTypes.START_INVESTMENTS_WITHDRAW:
    return state;

    reducer test updated(SHOW_QUANTUM_COMPUTING)




case actionTypes.SHOW_QUANT_COMP_MESSAGE:
    return showQuantCompMessage(state, action);
case actionTypes.TOGGLE_CHIP:
    return toggleChip(state, action);
case actionTypes.CHANGE_TO_Q_OPS:
    return changeToQOps(state, action);
case actionTypes.ADD_Q_OPS:
    return addQOps(state, action);
case actionTypes.SUBTRACT_Q_OPS:
    return subtractQOps(state, action);
case actionTypes.CAPTURE_CURRENT_Q_OPS:
    return captureCurrentQOps(state, action);
case actionTypes.ADD_CHIP:
    return addChip(state, action);
case actionTypes.UPDATE_OPS:
    return updateOps(state, action);
case actionTypes.START_TIMER:
    return startTimer(state, action);
case actionTypes.SHOW_AUTO_WIRE_BUYER:
    return showAutoWireBuyer(state, action);
case actionTypes.TOGGLE_WIRE_BUYER_PROJECT:
    return toggleWireBuyerProject(state, action);
case actionTypes.TOGGLE_AUTO_WIRE_BUYER:
    return toggleAutoWireBuyer(state, action);
case actionTypes.SHOW_MEGA_CLIPPERS:
    return showMegaClippers(state, action);
case actionTypes.CALC_DELAY_UNSOLD_INVENTARY:
    return calcDelayUnsoldInventary(state, action);
case actionTypes.GET_DEPOSIT:
    return getDeposit(state, action);
case actionTypes.ADD_INVESTMENTS_LINE:
    return addInvestmentsLine(state, action);
case actionTypes.UPDATE_INVESTMENTS_LINES:
    return updateInvestmentsLines(state, action);
case actionTypes.UPDATE_INVESTMENTS_TOTAL:
    return updateInvestmentsTotal(state, action);
case actionTypes.UPDATE_INVESTMENTS_CASH:
    return updateInvestmentsCash(state, action);
case actionTypes.UPDATE_INVESTMENTS_STOCKS:
    return updateInvestmentsStocks(state, action);
case actionTypes.UPDATE_FAKE_INVESTMENTS_CASH:
    return updateFakeInvestmentsCash(state, action);
case actionTypes.UPDATE_FUNDS_WITHDRAW:
    return updateFundsWithdraw(state, action);
case actionTypes.ADD_CHOSEN_FROM_DROPDOWN:
    return addChosenFromDropdown(state, action);
case actionTypes.UPDATE_INVESTMENTS_DELAY:
    return updateInvestmentsDelay(state, action);
