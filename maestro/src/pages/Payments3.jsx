import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConfirmPayment = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mx-4 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Awesome!</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Thank you. Yaw Fosu will be</p>
          <p>picking up your shipment</p>
        </div>

        {/* Success Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>

        {/* View on Map Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md mb-4">
          View on map
        </button>

        {/* Pay Button */}
        <Link to="/payments4" className=" block w-full border border-yellow-400 text-yellow-400 font-semibold py-3 shadow-md">
          Pay GHS 4,500
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPayment;