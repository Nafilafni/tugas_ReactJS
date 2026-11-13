import api from "../_api";

export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));
  return response.data;
};

export const register = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token") && !!getUser();
};

export const hasRole = (roles) => {
  const user = getUser();
  return !!user && roles.includes(user.role);
};