import { createSelector } from 'reselect';

const getCircles = (state) => state.canvas.circles;

export const getCirclesState = createSelector(
    [getCircles],
    (x) => x
);

const getNumberOfBalls = (state) => state.canvas.numberOfBalls;

export const getNumberOfBallsState = createSelector(
    [getNumberOfBalls],
    (x) => x
);

const getMousePressed = (state) => state.paint.mousePressed;

export const getMousePressedState = createSelector(
    [getMousePressed],
    (x) => x
);