import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.response.use(null, error => {
    return Promise.reject(error);
});

export const setJwt = (jwt) => {
    axios.defaults.headers.common['Authorization'] = jwt;
};

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setJwt
};
