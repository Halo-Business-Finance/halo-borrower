import axios from "axios";
axios.defaults.responseType = "json";
 
const API = axios.create({
 baseURL: process.env.NEXT_PUBLIC_BASE_URL,
 headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
 },
});
 
API.interceptors.request.use(
 async (config) => {
     const token=sessionStorage.getItem("token");
     const refreshToken=sessionStorage.getItem("refresh_token");
   if (token) {
     config.headers["Authorization"] = "Bearer " + token;
     config.headers["RefreshToken"]=refreshToken;
   }
   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);
 
API.interceptors.response.use(
 (response) => {
   return response?.data;
 },
 (error) => {
   return Promise.reject(error.response);
 }
);
 
export { API };
 
 
