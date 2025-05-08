// Services/auth.ts
import axios, { AxiosResponse } from 'axios';
import { apiClient, handleApiError } from './config';
import toast from '../utils/toast';

// Types
export interface UserContact {
  isContactable: boolean;
  isPrimary: boolean;
  type: string;
  value: string;
  deviceTokens: string[];
}

export interface SignUpFormData {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpPayload {
  avatar: string;
  companyId: number;
  confirmPassword: string;
  contacts: UserContact[];
  firstName: string;
  invitationId: string;
  inviterUserId: number;
  lastName: string;
  password: string;
  role: string;
  username: string;
}

export interface SignInPayload {
  username: string;
  password: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
  username: string;
  contacts: UserContact[];
  [key: string]: any;
}

export interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordData {
  username: string;
  token?: string;
  newPassword?: string;
  confirmPassword?: string;
}

// API functions

/**
 * Signs up a new user
 * @param formData The sign up form data
 * @returns AxiosResponse with the signup result
 */
export const apiSignUp = async (formData: SignUpFormData): Promise<AxiosResponse> => {
  try {
    const { name, phone, password, confirmPassword } = formData;

    const [firstName, ...rest] = name.trim().split(' ');
    const lastName = rest.join(' ') || '-';

    const payload: SignUpPayload = {
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

    const response = await apiClient.post('/users?fcm-token=', payload);

    toast.success('Account created successfully!');
    return response;
  } catch (error: any) {
    if (error.response) {
      console.error('Signup error response:', error.response.data);
      toast.error(`Signup failed: ${error.response.data?.message || 'Please try again'}`);
    } else {
      console.error('Signup error:', error.message);
      toast.error('Signup failed: Unknown error occurred.');
    }
    return error.response || { status: 500 };
  }
};

/**
 * Logs in a user using the unified login endpoint.
 * @param payload The login payload containing username and password.
 * @returns The user data and auth tokens
 */
export const apiSignIn = async (payload: SignInPayload): Promise<any> => {
  try {
    const response = await apiClient.post('/unified-login', payload);

    if (response.status === 200) {
      toast.success('Login successful!');
      return response.data;
    } else {
      throw new Error(response.data?.message || 'Login failed. Please try again.');
    }
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } else if (error.request) {
      const errorMessage = 'No response from server. Please try again later.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    } else {
      const errorMessage = 'An unexpected error occurred. Please try again.';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }
};

/**
 * Gets the current user's profile
 * @returns The user profile data
 */
export const apiProfile = async (): Promise<UserData> => {
  try {
    const response = await apiClient.get('/users/me');
    return response.data;
  } catch (error: any) {
    toast.error('Failed to fetch profile');
    throw error;
  }
};

// Additional API routes from Swagger documentation

/**
 * Get user by their ID
 * @param userId The ID of the user to fetch
 * @returns The user data
 */
export const getUserById = async (userId: number): Promise<UserData> => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to fetch user: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Get users with optional filters
 * @param params Optional query parameters
 * @returns List of users matching criteria
 */
export const getUsers = async (params?: Record<string, any>): Promise<UserData[]> => {
  try {
    const response = await apiClient.get('/users', { params });
    return response.data;
  } catch (error: any) {
    toast.error('Failed to fetch users');
    throw error;
  }
};

/**
 * Update a user's information
 * @param userId The ID of the user to update
 * @param userData The updated user data
 * @returns The updated user data
 */
export const updateUser = async (userId: number, userData: Partial<UserData>): Promise<UserData> => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData);
    toast.success('User updated successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to update user: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Delete a user
 * @param userId The ID of the user to delete
 * @returns Success response
 */
export const deleteUser = async (userId: number): Promise<any> => {
  try {
    const response = await apiClient.delete(`/users/${userId}`);
    toast.success('User deleted successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to delete user: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Change a user's password
 * @param userId The ID of the user
 * @param passwordData Password change data
 * @returns Success response
 */
export const changePassword = async (userId: number, passwordData: PasswordData): Promise<any> => {
  try {
    const response = await apiClient.put(`/users/${userId}/password`, passwordData);
    toast.success('Password changed successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to change password: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Request or complete a password reset
 * @param data Password reset data
 * @returns Success response
 */
export const resetPassword = async (data: ResetPasswordData): Promise<any> => {
  try {
    const response = await apiClient.post('/users/password/reset', data);
    toast.success('Password reset request processed');
    return response.data;
  } catch (error: any) {
    toast.error(`Password reset failed: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Verify a user's email with verification token
 * @param token The email verification token
 * @returns Success response
 */
export const verifyEmail = async (token: string): Promise<any> => {
  try {
    const response = await apiClient.get(`/users/email-verification?token=${token}`);
    toast.success('Email verified successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Email verification failed: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Activate a user account
 * @param userId The ID of the user to activate
 * @returns Success response
 */
export const activateUser = async (userId: number): Promise<any> => {
  try {
    const response = await apiClient.put(`/users/${userId}/activate`);
    toast.success('User activated successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to activate user: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Deactivate a user account
 * @param userId The ID of the user to deactivate
 * @returns Success response
 */
export const deactivateUser = async (userId: number): Promise<any> => {
  try {
    const response = await apiClient.put(`/users/${userId}/deactivate`);
    toast.success('User deactivated successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to deactivate user: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Add a contact to a user
 * @param userId The ID of the user
 * @param contactData The contact data to add
 * @returns The added contact
 */
export const addUserContact = async (userId: number, contactData: UserContact): Promise<UserContact> => {
  try {
    const response = await apiClient.post(`/users/${userId}/contacts`, contactData);
    toast.success('Contact added successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to add contact: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Update a user's contact
 * @param userId The ID of the user
 * @param contactId The ID of the contact to update
 * @param contactData The updated contact data
 * @returns The updated contact
 */
export const updateUserContact = async (userId: number, contactId: number, contactData: Partial<UserContact>): Promise<UserContact> => {
  try {
    const response = await apiClient.put(`/users/${userId}/contacts/${contactId}`, contactData);
    toast.success('Contact updated successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to update contact: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
};

/**
 * Delete a user's contact
 * @param userId The ID of the user
 * @param contactId The ID of the contact to delete
 * @returns Success response
 */
export const deleteUserContact = async (userId: number, contactId: number): Promise<any> => {
  try {
    const response = await apiClient.delete(`/users/${userId}/contacts/${contactId}`);
    toast.success('Contact deleted successfully');
    return response.data;
  } catch (error: any) {
    toast.error(`Failed to delete contact: ${error.response?.data?.message || 'Unknown error'}`);
    throw error;
  }
}; 