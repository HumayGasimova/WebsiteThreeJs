import { combineEpics } from 'redux-observable';
import * as Epic from './index'

export const rootEpic = combineEpics(
    Epic.startInitPaginationEpic,
    Epic.startChoosingPageEpic,
    Epic.startChoosingPortfolioPageOnArrowButtonEpic,
    Epic.startInitPortfolioSingleEpic,
    Epic.startChoosingPortfolioSinglePageOnArrowButtonEpic,
    Epic.startAddingReplyEpic,
    Epic.startShowingCommentInputAreaEpic
    // Epic.submitMessageEpic
);
