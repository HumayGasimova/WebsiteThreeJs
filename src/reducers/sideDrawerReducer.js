import * as actionTypes from '../constants/actionTypes';

const initialState = {
    sideDrawerOpen: ""
};

function sideDrawerHandler (state = initialState, action){
    switch(action.type){
        case actionTypes.SIDE_DRAWER_IS_OPEN:
            return {
                ...state,
                sideDrawerOpen: action.option
            }
    }
        return state;
}


export default sideDrawerHandler;