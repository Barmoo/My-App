import React from 'react';
import { Link } from 'react-router-dom';

const Describe2 = () => {
  return (
    <div className="h-auto w-full max-w-3xl bg-white p-6">
      {/* Step Header */}
      <div className="text-gray-500 text-sm mb-4">Step 2 of 2</div>
      <div className="text-black text-lg font-semibold mb-6">Set pickup date and time</div>

      {/* Pickup Date and Time */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2"></label>
        <input
          type="text"
          placeholder="Pickup date and time"
          className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700"
        />
      </div>

      {/* Drop Off Date and Time */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2"></label>
        <input
          type="text"
          placeholder="Drop off date and time"
          className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-700"
        />
      </div>

      {/* Additional Notes */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2"></label>
        <textarea
          placeholder="Additional notes"
          className="w-full bg-gray-100 border border-gray-300  px-2 py-2 text-gray-700"
          rows=""
        ></textarea>
      </div>

      {/* Back and Continue Buttons */}
      <div className="flex items-center justify-around mt-48">
        <button className="text-gray-700 text-sm">Back</button>
        <Link to="/describe3" className="bg-yellow-400 text-black font-semibold py-2 px-12 shadow-md">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Describe2;