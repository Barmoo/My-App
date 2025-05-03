import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Payments5 = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mx-4 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Sorry!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Please make payment to complete</p>
          <p>this booking</p>
        </div>

        {/* Error Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-4xl" />
        </div>

        {/* Complete Payment Button */}
        <Link to="/payments6" className="block w-full bg-yellow-400 text-black font-semibold py-3 shadow-md">
          Complete payment
        </Link>
      </div>
    </div>
  );
};

export default Payments5;