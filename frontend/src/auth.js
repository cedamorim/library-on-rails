import Store from "./store";
import api from "./api";

const auth = {
  isAuthenticated() {
    Store.update(s => {
      s.isAuthenticated = !!this.token();
    });

    return !!this.token();
  },

  token() {
    return localStorage.token;
  },

  async login(email, password) {
    try {
      const { data } = await api.post("auth", { email, password });

      if (data.error) {
        return data.error;
      }

      Store.update(s => {
        s.isAuthenticated = true;
      });

      localStorage.token = data.token;
      return true;
    } catch (e) {
      return false;
    }
  },

  logout() {
    Store.update(s => {
      s.isAuthenticated = false;
    });
    
    localStorage.clear();
  },
};

export default auth;
