import * as actionTypes from './actionsTypes';
import axios from 'axios'

export const authStart = () => {
    return  {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL
    }
};

export const auth = (email,password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_N8FLceIK9Rqy9gcMZ19fxGIHfYd1-5g', authData )
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