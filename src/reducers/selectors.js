import { 
    createSelector 
} from 'reselect';

const getMenuButtonIsPressed = (state) => state.home.menuButtonIsPressed;

export const getMenuButtonIsPressedState = createSelector(
    [getMenuButtonIsPressed],
    (x) => x
);

const getSidebarOnInit = (state) => state.home.sidebarOnInit;

export const getSidebarOnInitState = createSelector(
    [getSidebarOnInit],
    (x) => x
);

const getFeedbacks = (state) => state.home.feedbacks;

export const getFeedbacksState = createSelector(
    [getFeedbacks],
    (x) => x
);

const getDots = (state) => state.home.dots;

export const getDotsState = createSelector(
    [getDots],
    (x) => x
);

