import api from "./api";

const auth = {
  isAuthenticated() {
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

      localStorage.token = data.token;
      return true;
    } catch (e) {
      return false;
    }
  },

  logout() {
    localStorage.clear();
  },
};

export default auth;
