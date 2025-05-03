import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Payments4 = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mx-4 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Sorry!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Whoa! Something went wrong.</p>
          <p>Kindly try again</p>
        </div>

        {/* Error Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-4xl" />
        </div>

        {/* Try Again Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md mb-4">
          Please Try Again
        </button>

        {/* Dimmed Pay Button */}
        <Link to="/payments5" className=" block w-full bg-gray-400 text-gray-700 font-semibold py-3 shadow-md cursor-not-allowed">
          Pay GHS 4,500
        </Link>
      </div>
    </div>
  );
};

export default Payments4;