import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export function authStart() {
    return { 
        type: actionTypes.AUTH_START
    };
};

export function authSuccess(token, userId) {
    return { 
        type: actionTypes.AUTH_SUCCESS, 
        idToken: token,
        userId: userId
    };
};

export function authFail(error) {
    return { 
        type: actionTypes.AUTH_FAIL, 
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    };
}

export function userSignUp (option){
    return {
        type: actionTypes.SIGN_UP_FORM,
        option: option
    }
};

export function auth(fullName, email, password, isSignup) {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            name: fullName,
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcsMxs65vm5n5vlRkMof58bdolEwOVkfg";
        if(!isSignup){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcsMxs65vm5n5vlRkMof58bdolEwOVkfg";
        }
        axios.post(url, authData)
        .then(response => {
            console.log("res",response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            axios.post("https://tictactoe-8fa18.firebaseio.com/users.json", authData)
            .then(x=>console.log("x",x))
            .catch(x=>console.log("err",x))

            // dispatch(saveUser(response.data.expiresIn))
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            // console.log(err.response);
            dispatch(authFail(err.response.data.error));
        })
           
       
    }
};