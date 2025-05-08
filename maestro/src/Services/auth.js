// Authentication service for Maestro app
import { apiClient, AUTH_API_URL, handleApiError } from './config';

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

        const response = await apiClient.post(
            `/users?fcm-token=`,
            payload
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

export const apiSignIn = async (payload) => {
    try {
        const response = await apiClient.post('/unified-login', payload);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.data?.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const apiProfile = async (payload) => {
    try {
        const response = await apiClient.get('/users/me', { params: payload });
        return response.data;
    } catch (error) {
        console.error('Profile fetch error:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const getUsers = async (params = {}) => {
    try {
        const response = await apiClient.get('/users', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await apiClient.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await apiClient.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const changePassword = async (userId, passwordData) => {
    try {
        const response = await apiClient.put(`/users/${userId}/password`, passwordData);
        return response.data;
    } catch (error) {
        console.error('Error changing password:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const resetPassword = async (resetData) => {
    try {
        const response = await apiClient.post('/users/password/reset', resetData);
        return response.data;
    } catch (error) {
        console.error('Error resetting password:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const verifyEmail = async (token) => {
    try {
        const response = await apiClient.get('/users/email-verification', { params: { token } });
        return response.data;
    } catch (error) {
        console.error('Error verifying email:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const activateUser = async (userId) => {
    try {
        const response = await apiClient.put(`/users/${userId}/activate`, {});
        return response.data;
    } catch (error) {
        console.error('Error activating user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const deactivateUser = async (userId) => {
    try {
        const response = await apiClient.put(`/users/${userId}/deactivate`, {});
        return response.data;
    } catch (error) {
        console.error('Error deactivating user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const addUserContact = async (userId, contactData) => {
    try {
        const response = await apiClient.post(`/users/${userId}/contacts`, contactData);
        return response.data;
    } catch (error) {
        console.error('Error adding contact:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const updateUserContact = async (userId, contactId, contactData) => {
    try {
        const response = await apiClient.put(`/users/${userId}/contacts/${contactId}`, contactData);
        return response.data;
    } catch (error) {
        console.error('Error updating contact:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const deleteUserContact = async (userId, contactId) => {
    try {
        const response = await apiClient.delete(`/users/${userId}/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting contact:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const lookupUserByContact = async (value, type) => {
    try {
        const response = await apiClient.get('/users/lookup/contact', { params: { value, type } });
        return response.data;
    } catch (error) {
        console.error('Error looking up user by contact:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const getUserAuthMethods = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}/auth-methods`);
        return response.data;
    } catch (error) {
        console.error('Error fetching auth methods:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const requestOTP = async (otpData) => {
    try {
        const response = await apiClient.post('/otp', otpData);
        return response.data;
    } catch (error) {
        console.error('Error requesting OTP:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const verifyOTP = async (otp) => {
    try {
        const response = await apiClient.post('/otp/verify', { otp });
        return response.data;
    } catch (error) {
        console.error('Error verifying OTP:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

// Additional endpoints from Swagger

export const refreshToken = async (refreshToken) => {
    try {
        const response = await apiClient.post('/refresh-token', { refreshToken });
        return response.data;
    } catch (error) {
        console.error('Error refreshing token:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const logout = async (userId) => {
    try {
        const response = await apiClient.post(`/users/${userId}/logout`);
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const inviteUser = async (inviteData) => {
    try {
        const response = await apiClient.post('/users/invite', inviteData);
        return response.data;
    } catch (error) {
        console.error('Error inviting user:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const acceptInvitation = async (invitationCode, userData) => {
    try {
        const response = await apiClient.post(`/users/invite/${invitationCode}/accept`, userData);
        return response.data;
    } catch (error) {
        console.error('Error accepting invitation:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const getUserDevices = async (userId) => {
    try {
        const response = await apiClient.get(`/users/${userId}/devices`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user devices:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const addUserDevice = async (userId, deviceData) => {
    try {
        const response = await apiClient.post(`/users/${userId}/devices`, deviceData);
        return response.data;
    } catch (error) {
        console.error('Error adding device:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const updateUserDevice = async (userId, deviceId, deviceData) => {
    try {
        const response = await apiClient.put(`/users/${userId}/devices/${deviceId}`, deviceData);
        return response.data;
    } catch (error) {
        console.error('Error updating device:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const deleteUserDevice = async (userId, deviceId) => {
    try {
        const response = await apiClient.delete(`/users/${userId}/devices/${deviceId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting device:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const getUserRoles = async () => {
    try {
        const response = await apiClient.get('/users/roles');
        return response.data;
    } catch (error) {
        console.error('Error fetching user roles:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const assignUserRole = async (userId, roleData) => {
    try {
        const response = await apiClient.post(`/users/${userId}/roles`, roleData);
        return response.data;
    } catch (error) {
        console.error('Error assigning role:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const removeUserRole = async (userId, roleId) => {
    try {
        const response = await apiClient.delete(`/users/${userId}/roles/${roleId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing role:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
};

export const verifyPhoneNumber = async (verificationData) => {
    try {
        const response = await apiClient.post('/users/verify-phone', verificationData);
        return response.data;
    } catch (error) {
        console.error('Error verifying phone number:', error);
        const errorData = handleApiError(error);
        throw new Error(errorData.message);
    }
}; 