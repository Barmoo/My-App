import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiSignUp } from '../Services/auth';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const name = formData.get('name')?.trim();
    const phone = formData.get('phone')?.trim();
    const password = formData.get('password')?.trim();
    const confirmPassword = formData.get('confirmPassword')?.trim();

    if (!name || !phone || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await apiSignUp({
        name,
        phone,
        password,
        confirmPassword,
      });

      if (response?.status === 200 || response?.status === 201) {
        alert('Sign up successful!');
        navigate('/onboarding1');
      } else {
        console.error('Signup error response:', response);
        alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please try again.');
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

      {/* Social signup buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 w-full max-w-md">
        <button className="flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-1/2 mb-4 sm:mb-0">
          <span className="mr-2">📘</span> Sign up with Facebook
        </button>
        <button className="flex items-center justify-center bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md w-full sm:w-1/2">
          <span className="mr-2">🔴</span> Sign up with Google
        </button>
      </div>

      <div className="flex items-center w-full max-w-md mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <div className="flex items-center w-full max-w-md mb-6">
        <input type="checkbox" className="mr-2" />
        <p className="text-sm text-gray-600">
          I agree to the{' '}
          <span className="text-blue-500">Terms of Conditions</span> and{' '}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>

      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <button className="text-blue-500 font-medium">Sign in</button>
      </p>
    </div>
  );
};

export default SignUp;
