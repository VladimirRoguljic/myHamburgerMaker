import * as actionTypes from './actionsTypes';
import axios from 'axios'

export const authStart = () => {
    return  {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error

    }
};

export const auth = (email,password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_N8FLceIK9Rqy9gcMZ19fxGIHfYd1-5g';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_N8FLceIK9Rqy9gcMZ19fxGIHfYd1-5g'
        }

        axios.post(url, authData )
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
};