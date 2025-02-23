import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "https://api.example.com";

// 공통 Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: BASE_URL, // 여기에 API 기본 URL 입력
  timeout: 3000, // 5초 타임아웃 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (Request Interceptor) - 토큰 자동 추가
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (Response Interceptor) - 오류 처리
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        await AsyncStorage.removeItem("access_token");
      }
      console.log("API Error:", error.response.data);
    } else {
      console.log("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
