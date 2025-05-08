// Services/config.js - Centralized API configuration
import axios from 'axios';

// Default API URLs
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sandbox.maestroafrica.com';
export const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || 'https://sandbox.maestroafrica.com/auth/api/v1';

// Create API client with default config
export const apiClient = axios.create({
    baseURL: AUTH_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Request-App': 'vehicleDriver',
    }
});

// Helper function to handle API errors
export const handleApiError = (error) => {
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