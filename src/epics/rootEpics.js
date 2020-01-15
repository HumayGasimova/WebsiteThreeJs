import { combineEpics } from 'redux-observable';
import * as Epic from './index'

export const rootEpic = combineEpics(
    Epic.startInitPaginationEpic,
    Epic.startChoosingPageEpic,
    Epic.startChoosingPageOnArrowButtonEpic
    // Epic.submitMessageEpic
);
