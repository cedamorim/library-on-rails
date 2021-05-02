import api from "../api";

const BookApi = {
  async index(params) {
    return await this.try(api.get("/books", params));
  },

  async delete(id) {
    return await this.try(api.delete(`/books/${id}`));
  },

  async try(request) {
    try {
      const { data } = await request;

      return { data };
    } catch ({ data: { error } }) {
      return { error };
    }
  },
};

export default BookApi;
