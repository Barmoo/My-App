import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Describe8 = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Awesome!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Request sent successfully. We will</p>
          <p>notify you when a rider accepts</p>
          <p>with a quote.</p>
        </div>

        {/* Success Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>

        {/* Button */}
        <Link to="/location1" className=" block w-full bg-yellow-400 text-black font-semibold py-3 shadow-md">
          View on map
        </Link>
      </div>
    </div>
  );
};

export default Describe8;