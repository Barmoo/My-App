import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding4 = () => {
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

      {/* Content */}
      <div className="text-center">
        <h1 className="text-lg font-bold mb-2">Welcome to Maestro</h1>
        <p className="text-sm text-gray-600">
          Your trusted partner for cargo transportation.
        </p>
        <Link to="/onboarding6" className="w-full max-w-md bg-black text-white text-sm font-medium py-3">
        Next
      </Link>
      </div>
    </div>
  );
};

export default Onboarding4;