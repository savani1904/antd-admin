import API from '@/api';

/**
 * Upload media files.
 * @param {FormData} mediaData - The form data containing media files.
 * @returns {Promise<Object>} - The API response data.
 */
export const uploadMedia = async (mediaData) => {
  try {
    const response = await API.post('/media', mediaData);
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to upload media:', error);
    }
    throw error;
  }
};

export default { uploadMedia };