import * as actionTypes from '../constants/actionTypes';

export function sideDrawerOpen (option){
    return {
        type: actionTypes.SIDE_DRAWER_IS_OPEN,
        option: option
    }
};



