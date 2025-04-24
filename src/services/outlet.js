// frontend/src/services/outlet.js
import axios from 'axios';

const API_BASE = '/api/outlets';

export const fetchOutletSummary = () =>
  axios.get(`${API_BASE}/summary`);

export const fetchPerformanceMetrics = () =>
  axios.get(`${API_BASE}/performance`);

export const fetchPendingOutlets = () =>
  axios.get(`${API_BASE}/pending`);

export const createOutlet = (outletData) =>
  axios.post(`${API_BASE}`, outletData);

export const updateOutletStatus = (id, statusData) =>
  axios.put(`${API_BASE}/${id}`, statusData);