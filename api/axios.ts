import axios from "axios";

const baseUrl = {
  // ios: "http://localhost:3030",
  // android: "http://10.0.2:3030",
  expoGo: "http://192.168.0.98:8081", // 변경 주의
};

const $axios = axios.create({
  // baseURL: Platform.OS === "ios" ? baseUrl.ios : baseUrl.android,
  baseURL: baseUrl.expoGo,
});

export default $axios;
