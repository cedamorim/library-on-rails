import api from "../api";

const BookApi = {
  async index(params) {
    try {
      const { data } = await api.get("/books", params);

      return { data };
    } catch (e) {
      return { error: e.message };
    }
  },
};

export default BookApi;
