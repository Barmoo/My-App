import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding2 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col items-center justify-between px-6 py-8">
      {/* Logo */}
      {/* <div className="mt-6">
        <img
          src="https://via.placeholder.com/100x50"
          alt="Maestro Logo"
          className="w-24 mx-auto"
        />
      </div> */}

      {/* Illustration */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Cargo Truck"
          className="w-64 h-auto mb-6 max-w-full"
        />
        <h2 className="text-lg font-bold text-center mt-10 md:mt-20">Cargo pickup</h2>
        <p className="text-sm text-gray-600 text-center mt-4">
          Enter pick up and dropoff location and
        </p>
        <p className="text-sm text-gray-600 text-center">
          request cargo pickup
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mb-6">
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-black rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>

      {/* Next Button */}
      <Link to="/onboarding3" className="w-full max-w-md bg-black text-white text-sm font-medium py-3">
        Next
      </Link>
    </div>
  );
};

export default Onboarding2;