// src/dashboard/services/dashboard.js

import API from '@/api';

/**
 * Handles API errors gracefully.
 * @param {Error} error - The error object.
 * @param {string} errorMessage - The error message to display or log.
 * @returns {Object} - Error response or fallback data.
 */
const handleApiError = (error, errorMessage) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(errorMessage, error);
  }

  // Provide a fallback response to prevent crashes in components.
  return { success: false, message: errorMessage, data: [] };
};

/**
 * Fetch dashboard summary statistics.
 * @returns {Promise<Object>} - Dashboard summary data including key metrics.
 */
export const getDashboardSummary = async () => {
  try {
    const response = await API.get('/dashboard/summary');
    return response?.data ?? handleApiError(null, 'Invalid response format');
  } catch (error) {
    return handleApiError(error, 'Failed to fetch dashboard summary');
  }
};

/**
 * Fetch sales analytics for the dashboard.
 * @returns {Promise<Object>} - Sales performance data.
 */
export const getSalesAnalytics = async () => {
  try {
    const response = await API.get('/dashboard/sales-analytics');
    return response?.data ?? handleApiError(null, 'Invalid response format');
  } catch (error) {
    return handleApiError(error, 'Failed to fetch sales analytics');
  }
};

/**
 * Fetch user engagement statistics.
 * @returns {Promise<Object>} - User activity and engagement metrics.
 */
export const getUserEngagement = async () => {
  try {
    const response = await API.get('/dashboard/user-engagement');
    return response?.data ?? handleApiError(null, 'Invalid response format');
  } catch (error) {
    return handleApiError(error, 'Failed to fetch user engagement stats');
  }
};

/**
 * Fetch operational insights.
 * @returns {Promise<Object>} - Operational metrics including productivity insights.
 */
export const getOperationalInsights = async () => {
  try {
    const response = await API.get('/dashboard/operational-insights');
    return response?.data ?? handleApiError(null, 'Invalid response format');
  } catch (error) {
    return handleApiError(error, 'Failed to fetch operational insights');
  }
};

/**
 * Fetch all dashboard data at once.
 * @returns {Promise<Object>} - Aggregated dashboard data.
 */
export const getCompleteDashboardData = async () => {
  try {
    const [summary, sales, engagement, operational] = await Promise.all([
      getDashboardSummary(),
      getSalesAnalytics(),
      getUserEngagement(),
      getOperationalInsights(),
    ]);

    return {
      success: true,
      summary,
      sales,
      engagement,
      operationalInsights: operational,
    };
  } catch (error) {
    return handleApiError(error, 'Failed to fetch complete dashboard data');
  }
};

const dashboardServices = {
  getDashboardSummary,
  getSalesAnalytics,
  getUserEngagement,
  getOperationalInsights,
  getCompleteDashboardData,
};

export default dashboardServices;