// src/api/http.js
import axios from 'axios';
import { BASE_URL } from './endpoint';

class HttpService {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    //   timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',  // Disable caching
        'Pragma': 'no-cache',  // Older HTTP/1.0 caching header
        'Expires': '0',  // Ensure the cache is expired
      },
    });
  }

  // HTTP methods (GET, POST, PUT, DELETE)
  async get(url, params = {}) {
    try {
      const response = await this.instance.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(url, data) {
    try {
      const response = await this.instance.post(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(url, data) {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.instance.delete(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error('API Request Error:', error);
    throw error.response || error;
  }
}

// Create an instance of the HttpService class to use in the app going forward
const httpService = new HttpService();
export default httpService;