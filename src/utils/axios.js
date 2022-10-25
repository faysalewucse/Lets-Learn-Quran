import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.alquran.cloud/v1/surah/",
});

export default axiosInstance;
