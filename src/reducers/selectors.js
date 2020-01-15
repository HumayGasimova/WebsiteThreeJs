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

const getFeedbacksToShow = (state) => state.home.feedbacksToShow;

export const getFeedbacksToShowState = createSelector(
    [getFeedbacksToShow],
    (x) => x
);

const getDots = (state) => state.home.dots;

export const getDotsState = createSelector(
    [getDots],
    (x) => x
);

const getFeedbacksStyle = (state) => state.home.feedbacksStyle;

export const getFeedbacksStyleState = createSelector(
    [getFeedbacksStyle],
    (x) => x
);

const getFeedbacksOnScroll = (state) => state.home.feedbacksOnScroll;

export const getFeedbacksOnScrollState = createSelector(
    [getFeedbacksOnScroll],
    (x) => x
);

const getPortfolio = (state) => state.home.portfolio;

export const getPortfolioState = createSelector(
    [getPortfolio],
    (x) => x
);

const getPaging = (state) => state.home.paging;

export const getPagingState = createSelector(
    [getPaging],
    (x) => x
);

