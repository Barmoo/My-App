import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OnboardingSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId: 0, // Replace with real ID if required
    companyId: 0,
    fcmToken: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setApiError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://api.maestro.africa/auth/api/v1/clients/', {
        clientId: formData.clientId,
        companyId: formData.companyId,
        fcmToken: formData.fcmToken,
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Signup successful:', response.data);
        navigate('/login');
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setApiError(error.response?.data?.message || error.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-white min-h-screen w-full flex flex-col items-center px-6 py-8">
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Maestro Logo"
          className="w-24 mx-auto"
        />
      </div>

      <h2 className="text-lg font-bold text-center mb-6">Create your Account</h2>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-32 mb-4 sm:mb-0">
          <span className="mr-2">F</span> Sign up with Facebook
        </button>
        <button className="flex items-center justify-center bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-32">
          <span className="mr-2">G+</span> Sign up with Google
        </button>
      </div>

      <div className="flex items-center w-full max-w-md mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-6">
        <input
          type="text"
          name="username"
          placeholder="Email or phone number"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center w-full max-w-md mb-6">
          <input type="checkbox" className="mr-2" required />
          <p className="text-sm text-gray-600">
            I agree to the{' '}
            <span className="text-blue-500">Terms of Conditions</span> and{' '}
            <span className="text-blue-500">Privacy Policy</span>
          </p>
        </div>

        {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

        <button
          type="submit"
          className="w-full max-w-md bg-black text-white text-sm font-medium py-3 mb-6"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={() => navigate('/login')} className="text-blue-500 font-medium">
          Sign in
        </button>
      </p>
    </div>
  );
};

export default OnboardingSignUp;
