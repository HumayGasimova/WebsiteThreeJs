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

const getY = (state) => state.canvas.y;

export const getYState = createSelector(
    [getY],
    (x) => x
);

const getDy = (state) => state.canvas.dy;

export const getDyState = createSelector(
    [getDy],
    (x) => x
);
