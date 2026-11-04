import api from "../_api";

export const getGenres = async () => {
  const response = await api.get("/genres");
  return response.data;
};

export const createGenre = async (data) => {
  const response = await api.post("/genres", data);
  return response.data;
};