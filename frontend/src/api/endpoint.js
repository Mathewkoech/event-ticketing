export const BASE_URL = process.env.REACT_APP_API_URL

export const ENDPOINTS = {
  users: '/users',
  tickets: '/tickets',
  events: '/events',
  login: '/auth/login',
  register: '/auth/register',
  getUserById: (id) => `/users/${id}`,
  updateUser: (id) => `/users/${id}`,
  createTicket: '/tickets/create',
};
export default ENDPOINTS;