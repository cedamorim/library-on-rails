import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: localStorage.token && {
    'Authorization': `Bearer ${localStorage.token}`
  }
});

instance.interceptors.response.use((response) => response, (error) => Promise.reject(error.response));

export default instance
