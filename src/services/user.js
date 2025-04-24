// src/services/user.js
import API from '@/api';

const loginUser = async (phone, otp) => {
  const response = await API.post('/users/login', { phone, otp });
  return response.data;
};

const registerUser = async (userData) => {
  const response = await API.post('/users/register', userData);
  return response.data;
};

const userService = {
  loginUser,
  registerUser,
};

export default userService;