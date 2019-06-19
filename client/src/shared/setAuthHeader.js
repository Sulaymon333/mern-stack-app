import axios from 'axios';

// search "axios common headers" from google

const setAuthHeader = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'];
    }
};
