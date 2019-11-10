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

export function authGetUserName (name){
    return {
        type: actionTypes.GET_USER_NAME,
        name: name
    }
};

export function authFail(error) {
    return { 
        type: actionTypes.AUTH_FAIL, 
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
   
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

export function authCheckState() {
  return dispatch => {
      const token = localStorage.getItem('token');
      if(!token){
          dispatch(logout());
      }else {
          const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
            }else{
                const userId = localStorage.getItem('userId');
                const userName = localStorage.getItem('name');

                dispatch(authSuccess(token, userId));
                dispatch(authGetUserName(userName));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
            }
      }
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
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', response.data.localId);
            dispatch(authSuccess(response.data.idToken, response.data.localId));

            if(isSignup){
                dispatch(authGetUserName(fullName));
                localStorage.setItem('name', fullName);
                const userInfo = {
                    name: fullName,
                    email: response.data.email,
                    password: password,
                    userId: response.data.localId
                }
                axios.post(`https://tictactoe-8fa18.firebaseio.com/users.json`, userInfo)
                .then(x=>console.log("x",x))
                .catch(x=>console.log("err",x))
            }

            if(!isSignup){
                axios.get('https://tictactoe-8fa18.firebaseio.com/users.json')
                .then(res => {
                    let data = res.data;
                    let usersArray=[]
                    for(let key in data){
                        usersArray.push({
                            id: key,
                            data: data[key]
                        })
                    }
                    let userData = usersArray.find(x=>x.data.userId === response.data.localId)
                    dispatch(authGetUserName(userData.data.name));
                    localStorage.setItem('name', userData.data.name);
                })
            }

            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        })
           
       
    }
};