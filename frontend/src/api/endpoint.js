export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const ENDPOINTS = {
  users: '/api/users',
  tickets: '/api/tickets',
  events: '/api/events',
  login: '/auth/login',
  register: '/api/auth/register',
  getUserById: (id) => `/users/${id}`,
  updateUser: (id) => `/users/${id}`,
  createTicket: '/tickets/create',
};
export default ENDPOINTS;