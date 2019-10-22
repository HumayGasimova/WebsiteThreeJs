import { createSelector } from 'reselect';

// import { initialState } from './businessReducer';
const getPaperclips= (state) => state.business.paperClips;

export const getPaperclipsState = createSelector(
    [getPaperclips],
    (paperClips) => paperClips
);