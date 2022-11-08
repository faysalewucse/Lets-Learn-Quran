import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.quran.com/api/v4",
});

export default axiosInstance;
