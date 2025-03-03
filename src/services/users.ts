<<<<<<< HEAD
import api from "./api"

export const getUsers = async () => {
  const response = await api.get("/users")
  return response.data
}

export const createUser = async (userData: any) => {
  const response = await api.post("/users", userData)
  return response.data
}

export const updateUser = async (userId: number, userData: any) => {
  const response = await api.put(`/users/${userId}`, userData)
  return response.data
}

export const deleteUser = async (userId: number) => {
  const response = await api.delete(`/users/${userId}`)
  return response.data
}

=======
import api from "./api";

interface User {
  id: number;
  email: string;
  is_active: boolean;
  role: string;
}

interface PageResponse<T> {
  content: T[];
  pageable: any;
  totalElements: number;
  totalPages: number;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<PageResponse<User>>("users"); // Updated path
  return response.data.content;
};

export const createUser = async (userData: any) => {
  const response = await api.post("users", userData); // Updated path
  return response.data;
};

export const updateUser = async (userId: number, userData: any) => {
  const response = await api.put(`users/${userId}`, userData); // Updated path
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await api.delete(`users/${userId}`); // Updated path
  return response.data;
};
>>>>>>> 74c1c3e (fixes)
