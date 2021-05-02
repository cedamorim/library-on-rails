import auth from "./auth";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers["Authorization"] = `Bearer ${localStorage.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (![401, 403].includes(response.status)) {
      return Promise.reject(response);
    }

    auth.logout();

    return Promise.reject(response);
  }
);

export default instance;
