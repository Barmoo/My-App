// import { apiClient } from "./config"; 



// Services/auth.js

import axios from 'axios';

export const apiSignUp = async (formData) => {
  try {
    const { name, phone, password, confirmPassword } = formData;

    const [firstName, ...rest] = name.trim().split(' ');
    const lastName = rest.join(' ') || '-';

    const payload = {
      avatar: '',
      companyId: 5,
      confirmPassword,
      contacts: [
        {
          isContactable: true,
          isPrimary: true,
          type: 'mobile',
          value: phone,
          deviceTokens: [],
        },
      ],
      firstName,
      invitationId: '',
      inviterUserId: 0,
      lastName,
      password,
      role: 'vehicleDriver',
      username: phone?.toString().trim(),
    };

    const response = await axios.post(
      'https://sandbox.maestroafrica.com/auth/api/v1/users?fcm-token=',
      payload,
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-Request-App': 'vehicleDriver',
        },
      }
    );

    return response;
  } catch (error) {
    if (error.response) {
      console.error('Signup error response:', error.response.data);
      alert(`Signup failed: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error('Signup error:', error.message);
      alert('Signup failed: Unknown error occurred.');
    }
    return error.response || { status: 500 };
  }
};

/**
 * Logs in a user using the unified login endpoint.
 * @param {Object} payload - The login payload containing username and password.
 * @returns {Promise<Object>} - Response data or throws an error.
 */
export const apiSignIn = async (payload) => {
  try {
    const response = await apiClient.post('/auth/api/v1/unified-login', payload);

    // Check if the backend responded successfully
    if (response.status === 200) {
      return response.data; // Return the actual response data
    } else {
      throw new Error(response.data?.message || 'Login failed. Please try again.');
    }
  } catch (error) {
    // Normalize error handling
    if (error.response) {
      // Backend returned an error response (4xx or 5xx)
      throw new Error(error.response.data?.message || 'Login failed. Please try again.');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server. Please try again later.');
    } else {
      // Something went wrong setting up the request
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

export const apiProfile = async(payload) => {
    return await apiClient.get('', payload)
};

