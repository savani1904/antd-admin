// src/services/performance.js

import API from '@/api';

/**
 * Fetches performance metrics from the API.
 * @returns {Promise<Object>} - Performance metrics data.
 */
export async function fetchPerformanceMetrics() {
  try {
    const response = await API.get('/performance-metrics');
    return response?.data ?? { success: false, message: 'Unexpected response format' };
  } catch (error) {
    console.error('Failed to fetch performance metrics:', error);
    return { success: false, message: error?.message || 'API request failed' };
  }
}