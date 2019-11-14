import { createSelector } from 'reselect';

const getX = (state) => state.canvas.x;

export const getXState = createSelector(
    [getX],
    (x) => x
);

const getDx = (state) => state.canvas.dx;

export const getDxState = createSelector(
    [getDx],
    (x) => x
);

