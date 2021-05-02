import auth from "./auth";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: localStorage.token && {
    Authorization: `Bearer ${localStorage.token}`,
  },
});

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
