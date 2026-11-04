import api from "../_api";

export const getAuthors = async () => {
  const response = await api.get("/authors");
  return response.data;
};

export const createAuthor = async (data) => {
  const response = await api.post("/authors", data);
  return response.data;
};