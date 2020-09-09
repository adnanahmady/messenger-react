import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import api from './api';

/**
 * storage name for jwt token on browsers local storage
 */
const tokenKey = 'token';

/**
 * login/register user
 * 
 * @param {Object} data
 */
export const register = async data => {
    const {data: {meta: {message}}} = await api.post(`/register`, data);
    toast.dismiss();
    toast.success(message);
}

/**
 * verify users registeration/login
 * 
 * @param {Object} data
 */
export const verifyUser = async data => {
    const { data: { meta, data: result} } = await api.post(`/verify/otp`, data);

    toast.dismiss();
    toast.success(meta.message);
    loginWithJwt(result.token);
}

/**
 * saves jwt token info browsers local storage
 * 
 * @param {String} data // jwt token 
 */
export const loginWithJwt = data => {
    localStorage.setItem(tokenKey, data);
}

/**
 * removes jwt token from browsers local storage
 * in other word logouts the user
 */
export const logout = () => {
    localStorage.removeItem(tokenKey);
}

/**
 * returns logedin user decoded jwt token
 * 
 * @return {Object/null}
 */
export const getCurrentUser = () => {
    try {
        const jwt = getJwt();

        return jwtDecode(jwt);
    } catch {
        return null;
    }
}

/**
 * returns stored jwt token on browsers local storage
 * 
 * @return {String}
 */
export const getJwt = () => {
    return localStorage.getItem(tokenKey);
}

api.setJwt(getJwt());

export default {
    register,
    logout,
    loginWithJwt,
    getCurrentUser,
    getJwt
}