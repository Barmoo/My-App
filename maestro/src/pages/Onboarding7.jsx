import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Onboarding7 = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setLoading(true);

    try {
      const response = await axios.post('https://api.maestro.africa/auth/api/v1/login', {
        email: username,
        password: password,
      });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Navigate or update UI
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      console.error('Login failed at:', error.config?.url);
      console.error('Status:', error.response?.status);
      console.error('Details:', error.response?.data || error.message);
      setApiError(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-white min-h-screen w-full flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <div className="mb-6">
        <img src="https://via.placeholder.com/100x50" alt="Maestro Logo" className="w-24 mx-auto" />
      </div>

      {/* Title */}
      <Link to="/" className="text-lg font-bold text-center mb-6">Log in to your Account</Link>

      {/* Error Message */}
      {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

      {/* Social Media Login Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-1/2 mb-4 sm:mb-0">
          <span className="mr-2">📘</span> Sign in with Facebook
        </button>
        <button className="flex items-center justify-center bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-1/2">
          <span className="mr-2">🔴</span> Sign in with Google
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full max-w-md mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-6">
        <input
          type="text"
          name="username"
          placeholder="Email or phone number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember password</span>
          </div>
          <button type="button" className="text-blue-500">Forgotten password?</button>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <button onClick={() => navigate('/signup')} className="text-blue-500 font-medium">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Onboarding7;
