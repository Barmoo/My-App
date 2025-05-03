import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding3 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Maestro Logo"
          className="w-24 mx-auto"
        />
      </div>

      {/* Instruction Text */}
      <p className="text-center text-sm text-gray-600">
        A Verification code has been sent to your 
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">phone number. Enter code below.</p>

      {/* Code Input */}
      <div className="flex justify-center space-x-4 mb-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-200 text-gray-800 text-lg font-medium flex items-center justify-center rounded-md"
          >
            -
          </div>
        ))}
      </div>

      {/* Resend Code */}
      <button className="text-blue-500 text-sm font-medium mb-6">
        Resend verification code
      </button>

      {/* Confirm Button */}
      <Link to="/onboarding4" className="w-full max-w-md bg-black text-white text-sm font-medium py-3">
        Confirm
      </Link>
    </div>
  );
};

export default Onboarding3;