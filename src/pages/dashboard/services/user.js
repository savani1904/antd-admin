// src/services/user.js

import API from '@/api';

/**
 * Handles API errors gracefully and logs them in development mode.
 *
 * @param {Error} error - The error object.
 * @param {string} context - The context of the error for debugging.
 * @returns {Object} - Formatted error response.
 */
const handleApiError = (error, context) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[AUTH ERROR] ${context}:`, error?.message || error);
  }
  return { success: false, message: error?.message || 'Authentication error' };
};

/**
 * Attempts to log in a user with the given username and password.
 * 
 * In development mode, simulates authentication using dummy credentials:
 *   - admin : admin123
 *   - guest : guest
 * and returns a fake token.
 *
 * In production, it sends a POST request to the /login endpoint.
 *
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - A promise resolving with an object containing a token.
 */
export async function loginUser(username, password) {
  try {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (username === 'admin' && password === 'admin123') ||
            (username === 'guest' && password === 'guest')
          ) {
            const fakeToken = 'dummy-token';
            localStorage.setItem('token', fakeToken); // Store token for session persistence
            resolve({ success: true, token: fakeToken });
          } else {
            reject(new Error('Invalid username or password'));
          }
        }, 500); // Simulating network latency
      });
    } else {
      const response = await API.post('/login', { username, password });

      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token); // Store token after successful login
        return { success: true, token: response.data.token };
      } else {
        throw new Error('Unexpected response format');
      }
    }
  } catch (error) {
    return handleApiError(error, 'LoginUser');
  }
}

/**
 * Logs out the user by removing the stored token.
 *
 * @returns {Object} - An object indicating the success of the operation and a message.
 */
export function logoutUser() {
  try {
    localStorage.removeItem('token');
    return { success: true, message: 'Logged out successfully' };
  } catch (error) {
    return handleApiError(error, 'LogoutUser');
  }
}

/**
 * Checks whether a user is currently authenticated.
 *
 * @returns {boolean} - True if a token is present; otherwise, false.
 */
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}