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

const getDots = (state) => state.home.dots;

export const getDotsState = createSelector(
    [getDots],
    (x) => x
);

const getActivatedIcon = (state) => state.home.activatedIcon;

export const getActivatedIconState = createSelector(
    [getActivatedIcon],
    (x) => x
);

const getImageIsEnlarged = (state) => state.home.imageIsEnlarged;

export const getImageIsEnlargedState = createSelector(
    [getImageIsEnlarged],
    (x) => x
);
