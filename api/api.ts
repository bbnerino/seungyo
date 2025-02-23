import axios from "axios";
import axiosInstance from "./axiosInstance";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchLogin = async () => {
  const response = await axios.get(`${API_URL}/login`);
  return response.data;
};

export const fetchSignup = async (user: { name: string; email: string }) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
};

const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/data");
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
