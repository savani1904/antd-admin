import axios from 'axios';

// Create an Axios instance with a base URL.
// Adjust the baseURL to match your backend API endpoint.
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:7000/api',
});

/**
 * Fetches outlet data from the backend.
 * @returns {Promise<Object>} - The outlet data returned from the API.
 */
export const getOutlets = async () => {
  try {
    const response = await API.get('/outlets');
    return response.data; // Assumes the API response contains the data in a `data` property
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to fetch outlets:', error);
    }
    throw error;
  }
};

// Assign the object to a variable before exporting
const outletService = { getOutlets };
export default outletService;