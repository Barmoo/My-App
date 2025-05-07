// Services/config.ts
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

/**
 * API Base URLs
 * These are configured to use environment variables with fallbacks.
 * In a production environment, set these in your .env file:
 * 
 * VITE_API_BASE_URL=https://sandbox.maestroafrica.com
 * VITE_AUTH_API_URL=https://sandbox.maestroafrica.com/auth/api/v1
 */
export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || 'https://sandbox.maestroafrica.com';
export const AUTH_API_URL: string = import.meta.env.VITE_AUTH_API_URL || 'https://sandbox.maestroafrica.com/auth/api/v1';

/**
 * Standard API error response format
 */
export interface ApiErrorResponse {
  status: number;
  message: string;
  data: any | null;
}

/**
 * Create API client with default configuration
 * This will be the single source of truth for API communications
 * All API URLs will be relative to the base URL specified here
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-Request-App': 'vehicleDriver',
  }
});

/**
 * Standardized API error handler
 * @param error The axios error
 * @returns A standardized error response
 */
export const handleApiError = (error: AxiosError): ApiErrorResponse => {
  if (error.response) {
    // Server responded with an error status (4xx, 5xx)
    return {
      status: error.response.status,
      message: error.response.data?.message || 'Server error occurred',
      data: error.response.data
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      status: 0,
      message: 'No response from server. Please check your connection.',
      data: null
    };
  } else {
    // Error setting up the request
    return {
      status: 0,
      message: error.message || 'An unexpected error occurred',
      data: null
    };
  }
}; 