import * as actionTypes from '../constants/actionTypes';

export function userSignUpRequest (userData){
    return dispatch => {
        dispatch ({
            type: actionTypes.SIGNUP_REQUEST
        })
        return console.log("hey")
    }
};


