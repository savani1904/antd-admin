import API from '@/api';

/**
 * Fetch operational reports from the server.
 * @returns {Promise<Object>} - Operational reports data.
 */
export const getOperationalReports = async () => {
  try {
    const response = await API.get('/reports');
    return response.data; // Ensure response contains 'data' with the expected structure
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to fetch operational reports:', error); // Replaced console.error
    }
    throw error; // Allow errors to propagate for external handling
  }
};

/**
 * Fetch detailed report by ID.
 * @param {string} reportId - The ID of the report to retrieve.
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
 * @param {Object} reportData - The report payload.
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

/**
 * Export all report-related functions for external use.
 */
const reportsService = {
  getOperationalReports,
  getReportById,
  submitReport,
};

export default reportsService;