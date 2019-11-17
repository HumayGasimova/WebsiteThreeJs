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

const getColor = (state) => state.paint.color;

export const getColorState = createSelector(
    [getColor],
    (x) => x
);

const getLastX = (state) => state.paint.lastX;

export const getLastXState = createSelector(
    [getLastX],
    (x) => x
);

const getLastY = (state) => state.paint.lastY;

export const getLastYState = createSelector(
    [getLastY],
    (x) => x
);

const getX = (state) => state.paint.x;

export const getXState = createSelector(
    [getX],
    (x) => x
);

const getY = (state) => state.paint.y;

export const getYState = createSelector(
    [getY],
    (x) => x
);

const getColorPickerIsShown = (state) => state.paint.colorPickerIsShown;

export const getColorPickerIsShownState = createSelector(
    [getColorPickerIsShown],
    (x) => x
);

const getBgColor = (state) => state.paint.bgColor;

export const getBgColorState = createSelector(
    [getBgColor],
    (x) => x
);

const getButtonsName = (state) => state.paint.buttonsName;

export const getButtonsNameState = createSelector(
    [getButtonsName],
    (x) => x
);

const getActiveToolButton = (state) => state.paint.activeToolButton;

export const getActiveToolButtonState = createSelector(
    [getActiveToolButton],
    (x) => x
);


