import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const createUser = async (user: { name: string; email: string }) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};
