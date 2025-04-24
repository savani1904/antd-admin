// src/utils/request.js
import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:7000', // set your API base URL here
  timeout: 5000, // optional timeout
});

// Request interceptor to add JWT token to headers
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
request.interceptors.response.use(
  (response) => response.data, // return the data directly
  (error) => {
    if (error.response && error.response.status === 401) {
      message.error('Session expired. Please log in again.');
      // Optionally redirect to the login page
      window.location.href = '/login';
    } else if (error.response && error.response.data && error.response.data.message) {
      message.error(error.response.data.message);
    } else {
      message.error('Something went wrong. Please try again.');
    }
    return Promise.reject(error);
  }
);

export default request;