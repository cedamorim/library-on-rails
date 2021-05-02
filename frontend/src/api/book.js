import api from "../api";

const BookApi = {
  async index(params) {
    return await this.try(api.get("/books", params));
  },

  async get(id) {
    return await this.try(api.get(`/books/${id}`));
  },

  async create(params) {
    return await this.try(api.post("/books", params));
  },

  async update(id, params) {
    return await this.try(api.patch(`/books/${id}`, params));
  },

  async delete(id) {
    return await this.try(api.delete(`/books/${id}`));
  },

  async try(request) {
    try {
      const { data } = await request;

      return { data };
    } catch ({ data: { error, errors } }) {
      return { error, errors };
    }
  },
};

export default BookApi;
