import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding7 = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-white min-h-screen w-full flex flex-col items-center px-6 py-8">
      <h2 className="text-lg font-bold text-center mb-6">Log in to your Account</h2>
      {/* Login Form */}
      <form className="w-full max-w-md space-y-4 mb-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-medium py-3"
        >
          Login
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