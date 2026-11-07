import api from "../_api";

export const getGenres = async () => {
  const response = await api.get("/genres");
  return response.data;
};

export const getGenre = async (id) => {
  const response = await api.get(`/genres/${id}`);
  return response.data;
};

export const createGenre = async (data) => {
  const response = await api.post("/genres", data);
  return response.data;
};

export const updateGenre = async (id, data) => {
  const response = await api.put(`/genres/${id}`, data);
  return response.data;
};

export const deleteGenre = async (id) => {
  const response = await api.delete(`/genres/${id}`);
  return response.data;
};