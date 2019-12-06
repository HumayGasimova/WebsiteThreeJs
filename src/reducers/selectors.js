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

const getServices = (state) => state.home.services;

export const getServicesState = createSelector(
    [getServices],
    (x) => x
);

const getMembers = (state) => state.home.members;

export const getMembersState = createSelector(
    [getMembers],
    (x) => x
);

const getImages = (state) => state.home.images;

export const getImagesState = createSelector(
    [getImages],
    (x) => x
);

const getFeedback = (state) => state.home.feedback;

export const getFeedbackState = createSelector(
    [getFeedback],
    (x) => x
);

