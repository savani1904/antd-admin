import API from '@/api';

/**
 * Fetch operational reports from the server.
 * @returns {Promise<Object>} - Operational reports data.
 */
export const getOperationalReports = async () => {
  try {
    const response = await API.get('/reports');
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to fetch operational reports:', error);
    }
    throw error;
  }
};

/**
 * Fetch detailed report by ID.
 * @param {string} reportId - The ID of the report.
 * @returns {Promise<Object>} - Detailed report data.
 */
export const getReportById = async (reportId) => {
  try {
    const response = await API.get(`/reports/${reportId}`);
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Failed to fetch report with ID ${reportId}:`, error);
    }
    throw error;
  }
};

/**
 * Submit a new operational report.
 * @param {Object} reportData - The payload for the report.
 * @returns {Promise<Object>} - API response confirming report submission.
 */
export const submitReport = async (reportData) => {
  try {
    const response = await API.post('/reports', reportData);
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to submit operational report:', error);
    }
    throw error;
  }
};

export default {
  getOperationalReports,
  getReportById,
  submitReport,
};