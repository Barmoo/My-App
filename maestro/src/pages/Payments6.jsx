import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmPayment = () => {
  return (
    <div className="h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 mx-4 text-center">
        {/* Header */}
        <h2 className="text-black text-lg font-semibold mb-4">Pickup Confirmation</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Message */}
        <div className="text-gray-700 text-sm mb-6">
          <p>Are you sure you want to pay</p>
          <p>GHC4,500 to truck driver</p>
          <p>for pickup?</p>
        </div>

        {/* Confirm Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 shadow-md mb-4">
          Yes, pick my cargo
        </button>

        {/* Cancel Button */}
        <Link to="/payments7" className=" block w-full text-red-500 font-semibold py-3">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPayment;