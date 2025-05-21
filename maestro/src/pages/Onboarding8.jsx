import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate signup logic
    setTimeout(() => {
      alert('Sign up successful!');
      navigate('/'); // Navigate back to login after signup
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="font-sans bg-white min-h-screen w-full flex flex-col items-center px-6 py-8">
      <h2 className="text-lg font-bold text-center mb-6">Create your Account</h2>
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
    </div>
  );
};

export default SignUp;