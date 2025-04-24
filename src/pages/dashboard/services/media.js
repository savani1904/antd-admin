import API from '@/api';

/**
 * Upload media file(s) to the server.
 * @param {FormData} mediaData - The media files to be uploaded.
 * @returns {Promise<Object>} - API response containing the uploaded media details.
 */
export const uploadMedia = async (mediaData) => {
  try {
    const response = await API.post('/media/upload', mediaData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to upload media:', error);
    }
    throw error;
  }
};

/**
 * Fetch all uploaded media files.
 * @returns {Promise<Object[]>} - List of uploaded media files.
 */
export const getMediaList = async () => {
  try {
    const response = await API.get('/media/list');
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to fetch media list:', error);
    }
    throw error;
  }
};

/**
 * Delete a specific media file.
 * @param {string} mediaId - The ID of the media file to delete.
 * @returns {Promise<Object>} - API response confirming deletion.
 */
export const deleteMedia = async (mediaId) => {
  try {
    const response = await API.delete(`/media/${mediaId}`);
    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Failed to delete media with ID ${mediaId}:`, error);
    }
    throw error;
  }
};

export default {
  uploadMedia,
  getMediaList,
  deleteMedia,
};