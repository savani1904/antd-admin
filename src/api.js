/* eslint-disable no-console */
import axios from "axios";

// Create an Axios instance with base configuration
const API = axios.create({
  baseURL: "http://localhost:7000/api", // Base URL of your backend API
});

// Automatically attach the Authorization header if a token exists
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    console.error("Error attaching token to request:", error);
    return Promise.reject(error);
  }
);

// Global error handling for responses
API.interceptors.response.use(
  (response) => response, // Return response if it's successful
  (error) => {
    console.error("API response error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;